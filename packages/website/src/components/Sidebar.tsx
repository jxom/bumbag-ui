import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Image, Stack, SideNav, css } from 'fannypack';
import _startCase from 'lodash/startCase';

const query = graphql`
  query {
    allFile(filter: { extension: { eq: "mdx" } }) {
      edges {
        node {
          extension
          name
          relativeDirectory
        }
      }
    }
  }
`;

const orders = [
  'primitives',
  'typography',
  'layout',
  'components',
  'form',
  'shells',
  'utilities',
  'addons',
  'copy-blocks'
];

export default function Sidebar(props) {
  const { path } = props;

  const { allFile } = useStaticQuery(query);
  const sidebarItems = allFile.edges.reduce((currentItems, node) => {
    const item = node.node;
    if (item.relativeDirectory) {
      return { ...currentItems, [item.relativeDirectory]: [...(currentItems[item.relativeDirectory] || []), item] };
    }
    return { ...currentItems };
  }, {});

  return (
    <Stack spacing="major-1" {...props}>
      <Image src="/logo.png" width="100%" paddingX="major-2" marginTop="major-2" />
      <SideNav
        selectedId={path}
        overrides={{
          SideNav: {
            Item: {
              css: {
                root: css`
                  min-height: 2.25em;
                `
              }
            }
          }
        }}
      >
        {orders.map(order => {
          const key = order;
          const items = sidebarItems[key];
          return (
            <SideNav.Level key={key} title={_startCase(key)}>
              {(items || []).map(item => (
                <SideNav.Item key={item.name} navId={`/${item.relativeDirectory}/${item.name}/`}>
                  <Link to={`/${item.relativeDirectory}/${item.name}/`}>
                    {_startCase(item.name).replace(/\s/g, '')}
                  </Link>
                </SideNav.Item>
              ))}
            </SideNav.Level>
          );
        })}
      </SideNav>
    </Stack>
  );
}
