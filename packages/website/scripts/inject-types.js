const path = require('path');
const ast = require('@textlint/markdown-to-ast');
const inject = require('md-node-inject');
const toMarkdown = require('ast-to-markdown');
const { readdirSync, writeFileSync, readFileSync, lstatSync } = require('fs-extra');
const { Project, ts } = require('ts-morph');

function isDirectory(path) {
  return lstatSync(path).isDirectory();
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

function getPropType(prop) {
  const declaration = getDeclaration(prop);
  const type = declaration.getType().getText(undefined, ts.TypeFormatFlags.InTypeAlias);

  // const encode = text => text.replace(/[\u00A0-\u9999<>&"]/gim, i => `&#${i.charCodeAt(0)};`);

  // return encode(type);
  return type;
}

function createPropTypeObject(prop) {
  return {
    name: prop.getEscapedName(),
    description: getComment(prop),
    type: getPropType(prop)
  };
}

function createPropTypeObjects(node) {
  return getProps(node).map(prop => createPropTypeObject(prop));
}

function createTypeMarkdown(types) {
  return types
    .map(
      type => `
**\`${type.name}\`**

\`\`\`
${type.type}
\`\`\`

${type.description}

`
    )
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

<details><summary>Inherits <code><strong>&#60;${use.replace(/(Local|Props)/g, '')}&#62;</strong></code> props</summary>
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
  const { docsPath, libPath } = config;

  const project = new Project({
    tsConfigFilePath: path.join(libPath, 'tsconfig.json'),
    addFilesFromTsConfig: false
  });

  const sourcePaths = getPaths(libPath, /.tsx$/);
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
  libPath: path.join(__dirname, '../../fannypack'),
  docsPath: path.join(__dirname, '../')
});
