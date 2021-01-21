/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }

  if (node.internal.type === 'File' || node.internal.type === 'Mdx') {
    const path = node.absolutePath || node.fileAbsolutePath;
    let type = 'docs';
    if (path.includes('blocks')) {
      type = 'blocks';
    }
    if (path.includes('native')) {
      type = 'native';
    }
    createNodeField({
      name: 'type',
      node,
      value: type,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              type
              slug
            }
            frontmatter {
              breakpoint
              group
              isFluid
              name
              path
              title
            }
            body
            tableOfContents
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const pages = result.data.allMdx.edges;
  pages.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/layout/DocsLayout.tsx`),
      context: {
        id: node.id,
        frontmatter: node.frontmatter,
        mdxBody: node.body,
        tableOfContents: node.tableOfContents,
        type: node.fields.type,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native$': 'react-native-web',
  };
  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config);
};
