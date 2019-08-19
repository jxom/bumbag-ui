const path = require('path');
const ast = require('@textlint/markdown-to-ast');
const inject = require('md-node-inject');
const toMarkdown = require('ast-to-markdown');
const { readdirSync, writeFileSync, readFileSync, lstatSync } = require('fs-extra');
const { Project, ts } = require('ts-morph');

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
  return jsDocs.getTags().map(tag => tag.getTagName());
}

function getProps(node) {
  return node
    .getType()
    .getProperties()
    .filter(prop => !getTagNames(prop).includes('private'));
}

function getPropType(prop, shouldEncode) {
  const declaration = getDeclaration(prop);
  const type = declaration.getType().getText(undefined, ts.TypeFormatFlags.InTypeAlias);

  const encode = text => text.replace(/[\u00A0-\u9999<>&"]/gim, i => `&#${i.charCodeAt(0)};`);

  return shouldEncode ? encode(type) : type;
}

function createPropTypeObject(prop) {
  return {
    name: prop.getEscapedName(),
    description: getComment(prop),
    encodedType: getPropType(prop, true),
    type: getPropType(prop)
  };
}

function createPropTypeObjects(node) {
  return getProps(node).map(prop => createPropTypeObject(prop));
}

function createTypeMarkdown(types) {
  return types
    .map(type => {
      const isShort = type.type.length < 50;
      return `
**<Code marginRight="major-1">${type.name}</Code>** ${
        isShort ? `<Code fontSize="150" palette="primary">${type.encodedType}</Code>` : ''
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

<Box marginBottom="major-4" />
`;
    })
    .join('');
}

function getTypeMarkdown(extractedType, typeReferences) {
  let content = '';

  const typeMetaData = typeReferences[extractedType];
  let types = typeMetaData.types;

  if (types.length > 0) {
    content = createTypeMarkdown(types);
  } else {
    content = 'No props to show.';
  }

  if (typeMetaData.uses) {
    typeMetaData.uses.forEach(use => {
      if (typeReferences[use]) {
        const useTypes = typeReferences[use].types.filter(
          type => !Boolean(types.find(refType => refType.name === type.name))
        );
        content = `
${content}

<details><Box use="summary" marginBottom="major-4">Inherits <code><strong>&#60;${use.replace(
          /(Local|Props)/g,
          ''
        )}&#62;</strong></code> props</Box>
${createTypeMarkdown(useTypes)}
</details>

        `;
        types = [...types, ...useTypes];
      }
    });
  }

  return `
<!-- Automatically generated -->

${content}`;
}

function extractTypes(config) {
  const { docsPath, libPaths } = config;

  const project = new Project({
    tsConfigFilePath: path.join(libPaths[0], 'tsconfig.json'),
    addFilesFromTsConfig: false
  });

  const sourcePaths = libPaths.reduce((currentSourcePaths, libPath) => {
    return [...currentSourcePaths, ...getPaths(libPath, /.tsx$/)];
  }, []);
  const sourceFilesAst = project.addExistingSourceFiles(sourcePaths);
  project.resolveSourceFileDependencies();

  let typeReferences = {};
  sourceFilesAst.forEach(sourceFileAst => {
    sourceFileAst.forEachChild(node => {
      const symbol = node.getSymbol();
      if (symbol) {
        const symbolName = symbol.getEscapedName();
        if (/Local.*Props/.test(symbolName)) {
          const propTypes = createPropTypeObjects(node);
          typeReferences[symbolName] = {
            ...typeReferences[symbolName],
            types: propTypes
          };
        }
        if (/^(?!(Local|use))[A-Z].*Props/.test(symbolName)) {
          const dependantTypes = node
            .getType()
            .getIntersectionTypes()
            .map(type => {
              const aliasSymbol = type.getAliasSymbol();
              if (aliasSymbol) {
                return aliasSymbol.getEscapedName();
              }
              return undefined;
            })
            .filter(type => Boolean(type) && type !== `Local${symbolName}`)
            .reverse();
          typeReferences[`Local${symbolName}`] = {
            ...typeReferences[`Local${symbolName}`],
            uses: dependantTypes
          };
        }
      }
    });
  });

  const docPaths = getPaths(docsPath, /\.mdx$/);
  docPaths.forEach(docPath => {
    const mdContents = readFileSync(docPath, { encoding: 'utf-8' });
    if (/#\s.*\sProps/.test(mdContents)) {
      const matches = mdContents.match(/#\s.*\sProps/g);
      matches.forEach(match => {
        const componentSection = match.split(' ')[1];
        const component = componentSection.replace(/\./g, '');
        const localType = `Local${component}Props`;
        const typeMarkdown = getTypeMarkdown(localType, typeReferences);
        try {
          const tree = ast.parse(mdContents);
          const merged = inject(`${componentSection} Props`, tree, ast.parse(typeMarkdown));
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
  libPaths: [path.join(__dirname, '../../fannypack'), path.join(__dirname, '../../fannypack-addon-highlighted-code')],
  docsPath: path.join(__dirname, '../')
});
