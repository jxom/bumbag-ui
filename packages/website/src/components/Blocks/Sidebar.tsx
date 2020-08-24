import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Sidebar from '../Sidebar';

const query = graphql`
  {
    allFile(sort: { fields: name }, filter: { extension: { eq: "mdx" }, fields: { type: { eq: "blocks" } } }) {
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
    '': [],
  },
];

export default function DocsSidebar(props: any) {
  const { path } = props;
  const { allFile } = useStaticQuery(query);
  const items = allFile.edges.map((edge) => edge.node);
  return <Sidebar orders={orders} items={items} path={path} />;
}
