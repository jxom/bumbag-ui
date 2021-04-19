import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Sidebar from '../Sidebar';

const query = graphql`
  {
    allFile(sort: { fields: name }, filter: { extension: { eq: "mdx" }, fields: { type: { eq: "docs" } } }) {
      edges {
        node {
          extension
          name
          relativeDirectory
          childMdx {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  }
`;

const orders = [
  {
    '': [
      'getting-started',
      'theming',
      'styling-components',
      'palette',
      'global-styles',
      'breakpoints',
      'fonts',
      'spacing',
      'composition',
      'variants',
      'color-modes',
      'migrating-from-fannypack',
    ],
  },
  { 'the-box-primitive': ['box', 'flex', 'style-props', 'alignment', 'altitudes', 'borders', 'border-radius'] },
  { hooks: [] },
  { 'page-shells': ['intro', 'page-with-header', 'page-with-sidebar', 'page-content'] },
  { layout: [] },
  { typography: [] },
  { components: [] },
  { form: ['form-libraries'] },
  { utilities: [] },
  { addons: [] },
];

export default function DocsSidebar(props: any) {
  const { path } = props;
  const { allFile } = useStaticQuery(query);
  const items = allFile.edges.reduce((currentItems, node) => {
    const item = node.node;
    let relativeDirectory = item.relativeDirectory || '';
    return { ...currentItems, [relativeDirectory]: [...(currentItems[relativeDirectory] || []), item] };
  }, {});
  return <Sidebar orders={orders} items={items} path={path} />;
}
