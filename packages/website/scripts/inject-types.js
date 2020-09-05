// NOTE: This is an absolute mess. I'm sorry. I will refactor it soon. #ASTs!

const path = require('path');
const ast = require('@textlint/markdown-to-ast');
const inject = require('md-node-inject');
const toMarkdown = require('ast-to-markdown');
const { readdirSync, writeFileSync, readFileSync, lstatSync } = require('fs-extra');
const { Project, ts, TypeGuards } = require('ts-morph');
const _ = require('lodash');

function isDirectory(path) {
  return lstatSync(path).isDirectory();
}

function formatType(type) {
  let newType = type.slice(0);
  if (newType[0] === '{') {
    let level = 0;
    let typeArray = newType.split('');
    typeArray.forEach((char, i) => {
      if (char === '{') {
        level = level + 1;
        typeArray.splice(i + 1, 1, `\n${' '.repeat(level * 2)}`);
      }
      if (char === '}') {
        level = level - 1;
        typeArray.splice(i - (level * 2 || 1), level * 2 || 1, `\n${' '.repeat(level * 2)}`);
      }
      if (char === ';') {
        typeArray.splice(i + 1, 1, `\n${' '.repeat(level * 2)}`);
      }
    });
    newType = typeArray.join('');
  } else {
    newType = newType.replace(/\s\|\s/g, '\n  | ');
  }
  return newType;
}

function getPaths(pagesPath, regex, initialDocPaths = []) {
  const fileNames = readdirSync(pagesPath);
  const docPaths = fileNames.reduce((currentDocPaths, fileName) => {
    const filePath = path.join(pagesPath, fileName);
    if (isDirectory(filePath)) {
      return getPaths(filePath, regex, currentDocPaths);
    }
    if (regex.test(fileName)) {
      return [...currentDocPaths, filePath];
    }
    return currentDocPaths;
  }, initialDocPaths);
  return docPaths;
}

function getComment(symbol) {
  const jsDocs = getJsDocs(symbol);
  if (!jsDocs) return '';
  return jsDocs.getComment();
}

function getDeclaration(symbol) {
  const declarations = symbol.getDeclarations();
  return declarations[0];
}

function getJsDocs(symbol) {
  if (getDeclaration(symbol).getJsDocs) {
    const jsDocs = getDeclaration(symbol).getJsDocs();
    return jsDocs[jsDocs.length - 1];
  }
  return null;
}

function getTagNames(prop) {
  const jsDocs = getJsDocs(prop);
  if (!jsDocs) return [];
  return jsDocs.getTags().map((tag) => tag?.getTagName?.());
}

function getProps(type) {
  return type.getProperties().filter((prop) => !getTagNames(prop).includes('private'));
}

function getPropType(prop, shouldEncode) {
  const declaration = getDeclaration(prop);
  const type = declaration.getType().getText(undefined, ts.TypeFormatFlags.InTypeAlias);

  const encode = (text) => text.replace(/[\u00A0-\u9999<>&"]/gim, (i) => `&#${i.charCodeAt(0)};`);

  return shouldEncode ? encode(type) : type;
}

function createPropTypeObject(prop) {
  if (prop.getEscapedName() === 'wrapElement') return;
  return {
    name: prop.getEscapedName(),
    isRequired: (prop.getFlags() & ts.SymbolFlags.Optional) === 0,
    description: getComment(prop),
    encodedType: getPropType(prop, true),
    type: getPropType(prop),
  };
}

function createPropTypeObjects(type) {
  return getProps(type)
    .map((prop) => createPropTypeObject(prop))
    .filter(Boolean);
}

function createTypeMarkdown(types) {
  return types
    .map((type) => {
      if (type.name.includes('unstable')) return '';
      const isShort = type.type.length < 50;
      return `
**<Code fontSize="150" marginRight="major-1">${type.name}</Code>** ${
        isShort ? `<Code fontSize="100" palette="primary">${type.encodedType}</Code>` : ''
      } ${
        type.isRequired
          ? '<Text marginLeft="major-1" fontSize="150" textTransform="uppercase" color="gray">Required</Text>'
          : ''
      }

${
  !isShort
    ? `
<Code isBlock palette="primary" fontSize="150" padding="minor-1" marginBottom="major-2">
{\`${formatType(type.type)}\`}
</Code>
`
    : ''
}

${type.description}

<Divider marginTop="major-2" marginBottom="major-2" />
`;
    })
    .join('');
}

function getTypeMarkdown(extractedType, typeReferences, { type } = {}) {
  let content = '';
  const typeMetaData = typeReferences[extractedType] || {};
  let types = typeMetaData?.types || [];

  if (types.length > 0) {
    content = createTypeMarkdown(types);
  } else if (type.length === 0 && !typeMetaData.uses && !typeMetaData.stateTypes) {
    content = 'No props to show.';
  }

  if (type === 'state-return') {
    content = `
<details><Box use="summary" marginBottom="major-2"><strong>${types.length} values</strong></Box>
${content}
</details>
    `;
  }

  if (typeMetaData.stateTypes && typeMetaData.stateTypes.length > 0) {
    content = `
${content}

<details><Box use="summary" marginBottom="major-2"><strong>${typeMetaData.stateTypes.length} state props</strong></Box>
<blockquote>These props are returned by the state hook. You can spread them into this component (<code>...state</code>) or pass them separately. You can also provide these props from your own state logic.</blockquote>
${createTypeMarkdown(typeMetaData.stateTypes)}
</details>

        `;
  }

  let populated = [];
  function populateUses(uses = []) {
    if (uses.length > 0) {
      uses.forEach((use) => {
        const typeReference = typeReferences[`Local${use}`];
        if (typeReference) {
          const useTypes = typeReference.types.filter(
            (type) => !Boolean(types.find((refType) => refType.name === type.name))
          );
          if (!populated.includes(use)) {
            content = `
${content}

<details><Box use="summary" marginBottom="major-2">Inherits <code><strong>${use.replace(
              /(Local|Props)/g,
              ''
            )}</strong></code> props</Box>
${createTypeMarkdown(useTypes)}
</details>
            `;
          }
          populated = [...populated, use];
          types = [...types, ...useTypes];
          populateUses(typeReference.uses);
        }
      });
    }
  }
  populateUses(typeMetaData.uses);

  return `
<!-- Automatically generated -->

${content}`;
}

function extractTypes(config) {
  const { docsPath, libPaths } = config;

  const project = new Project({
    tsConfigFilePath: path.join(libPaths[0], 'tsconfig.json'),
    addFilesFromTsConfig: false,
  });

  const sourcePaths = libPaths.reduce((currentSourcePaths, libPath) => {
    return [...currentSourcePaths, ...getPaths(libPath, /.tsx$/)];
  }, []);
  const sourceFilesAst = project.addExistingSourceFiles(sourcePaths);
  project.resolveSourceFileDependencies();

  let typeReferences = {};
  sourceFilesAst.forEach((sourceFileAst) => {
    sourceFileAst.forEachChild((node) => {
      const symbol = node.getSymbol();
      if (symbol) {
        const symbolName = symbol.getEscapedName();
        if (/(Local.*Props|.*StateReturn|.*InitialState)/.test(symbolName)) {
          const propTypes = createPropTypeObjects(node.getType());
          typeReferences[symbolName] = {
            ...typeReferences[symbolName],
            types: propTypes,
          };
        }
        if (/^(?!(Local|use))[A-Z].*Props/.test(symbolName)) {
          let dependantTypes = [];
          let extraTypes = [];
          let stateTypes = [];

          const typeNode = node?.getTypeNode?.();
          if (typeNode && TypeGuards.isIntersectionTypeNode(typeNode)) {
            typeNode.getTypeNodes().forEach((node) => {
              const nodeText = node.getText();

              dependantTypes = [...dependantTypes, nodeText];

              const types = node.getType().getIntersectionTypes();
              types.forEach((type) => {
                const typeText = type.getText();
                if (/reakit\/ts\/.*Return/.test(typeText)) {
                  const propTypes = createPropTypeObjects(type);
                  stateTypes = [...stateTypes, ...propTypes].filter(Boolean);
                } else if (
                  /Reakit.*/.test(nodeText) &&
                  !/ReakitBoxProps/.test(nodeText) &&
                  !/^React\./.test(typeText) &&
                  !typeText.includes('CSS') &&
                  !typeText.includes('HTMLAttributes')
                ) {
                  const propTypes = createPropTypeObjects(type);
                  extraTypes = [...extraTypes, ...propTypes].filter(Boolean);
                }
              });
            });
          }

          dependantTypes = dependantTypes.filter((type) => Boolean(type) && type !== `Local${symbolName}`).reverse();

          const types = _.uniqBy([..._.get(typeReferences, `[Local${symbolName}].types`, []), ...extraTypes], 'name');
          typeReferences[`Local${symbolName}`] = {
            ...typeReferences[`Local${symbolName}`],
            types,
            stateTypes,
            uses: dependantTypes,
          };
        }
      }
    });
  });

  const docPaths = getPaths(docsPath, /\.mdx$/);
  docPaths.forEach((docPath) => {
    const mdContents = readFileSync(docPath, { encoding: 'utf-8' });
    if (/#\s.*\s(API|Props|Return\sValues)/.test(mdContents)) {
      const matches = mdContents.match(/#\s.*\s(API|Props|Return\sValues)/g);
      matches.forEach((match) => {
        const mdContents = readFileSync(docPath, { encoding: 'utf-8' });
        const componentSection = match.split(' ')[1];
        let localType;
        let type;
        if (match.includes('useState Return Values') || match.includes('State Return Values')) {
          const component = componentSection.split('.')[0];
          localType = `${component}StateReturn`;
          type = 'state-return';
        } else if (match.includes('useState API') || match.includes('State API')) {
          const component = componentSection.split('.')[0];
          localType = `${component}InitialState`;
          type = 'state-api';
        } else {
          const component = componentSection.replace(/\./g, '');
          localType = `Local${component}Props`;
          type = 'props';
        }
        const typeMarkdown = getTypeMarkdown(localType, typeReferences, { type });

        let title;
        if (type === 'state-return') {
          title = 'Return Values';
        }
        if (type === 'state-api') {
          title = 'API';
        }
        if (type === 'props') {
          title = 'Props';
        }

        try {
          const tree = ast.parse(mdContents);
          const merged = inject(`${componentSection} ${title}`, tree, ast.parse(typeMarkdown));
          const markdown = toMarkdown(merged).trimLeft();
          writeFileSync(docPath, markdown);
          console.log(`Injected ${componentSection} props into ${docPath}`);
        } catch (e) {
          // do nothing
        }
      });
    }
  });
}

extractTypes({
  libPaths: [
    path.join(__dirname, '../../bumbag'),
    path.join(__dirname, '../../bumbag-addon-highlighted-code'),
    path.join(__dirname, '../../bumbag-addon-markdown'),
  ],
  docsPath: path.join(__dirname, '../src/'),
});
