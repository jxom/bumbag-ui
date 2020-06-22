import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Image, Stack, SideNav, css, palette } from 'fannypack';
import _startCase from 'lodash/startCase';

const query = graphql`
  {
    allFile(sort: { fields: name }, filter: { extension: { eq: "mdx" } }) {
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
      'palette',
      'styling-components',
      'global-styles',
      'breakpoints',
      'fonts',
      'spacing',
      'composition',
      'variants',
    ],
  },
  { 'the-box-primitive': ['box', 'css-props', 'altitudes', 'borders', 'border-radius'] },
  { hooks: [] },
  { 'page-shells': ['intro', 'page-with-header', 'page-with-sidebar', 'page-content'] },
  { layout: [] },
  { typography: [] },
  { components: [] },
  { form: [] },
  { utilities: [] },
  { addons: [] },
  { 'copy-blocks': [] },
];

export default function Sidebar(props) {
  const { path } = props;

  const { allFile } = useStaticQuery(query);
  const sidebarItems = allFile.edges.reduce((currentItems, node) => {
    const item = node.node;
    let relativeDirectory = item.relativeDirectory || '';
    return { ...currentItems, [relativeDirectory]: [...(currentItems[relativeDirectory] || []), item] };
  }, {});

  return (
    <Stack spacing="major-1" paddingY="major-2" {...props}>
      <SideNav
        selectedId={path}
        overrides={{
          SideNav: {
            Level: {
              Title: {
                css: {
                  root: css`
                    font-size: 13px;
                  `,
                },
              },
            },
            Item: {
              css: {
                root: (props) => css`
                  color: ${palette('text200')(props)} !important;
                  font-size: 14px;
                  font-weight: 500;
                  min-height: 2.25em;

                  &:hover {
                    color: ${palette('primary')(props)} !important;
                  }
                `,
              },
            },
          },
        }}
      >
        {orders.map((orderItem) => {
          const key = Object.keys(orderItem)[0];
          const itemOrders = orderItem[key];

          let items = sidebarItems[key];
          if (itemOrders.length > 0) {
            items = itemOrders.map((itemOrder) => items.find((item) => itemOrder === item.name));
          }

          return (
            <SideNav.Level key={key} title={_startCase(key)}>
              {(items || []).map((item) => {
                const frontmatter = item.childMdx?.frontmatter || {};
                return (
                  <SideNav.Item key={item.name} navId={frontmatter.path || `/${item.relativeDirectory}/${item.name}/`}>
                    <Link to={frontmatter.path || `/${item.relativeDirectory}/${item.name}/`}>
                      {frontmatter.title || _startCase(item.name).replace(/\s/g, '')}
                    </Link>
                  </SideNav.Item>
                );
              })}
            </SideNav.Level>
          );
        })}
      </SideNav>
    </Stack>
  );
}
