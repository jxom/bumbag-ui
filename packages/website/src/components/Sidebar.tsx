import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Box, Input, Stack, SideNav, css, usePage, applyTheme } from 'bumbag';
import _startCase from 'lodash/startCase';
import _uniqBy from 'lodash/uniqBy';

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
  { 'the-box-primitive': ['box', 'flex', 'css-props', 'alignment', 'altitudes', 'borders', 'border-radius'] },
  { hooks: [] },
  { 'page-shells': ['intro', 'page-with-header', 'page-with-sidebar', 'page-content'] },
  { layout: [] },
  { typography: [] },
  { components: [] },
  { form: ['form-libraries'] },
  { utilities: [] },
  { addons: [] },
  { 'copy-blocks': [] },
];

const SearchInput = applyTheme(Input, {
  defaultProps: {
    color: 'text',
    inputProps: {
      backgroundColor: 'white700',
      borderColor: 'white700',
      _focus: {
        borderColor: 'primary200',
      },
    },
    size: 'small',
  },
  modes: {
    dark: {
      defaultProps: {
        inputProps: {
          backgroundColor: 'gray900',
          borderColor: 'gray900',
          _focus: {
            borderColor: 'primary',
          },
        },
      },
    },
  },
});

export default function Sidebar(props: any) {
  const { path } = props;

  const { sidebar } = usePage();

  const { allFile } = useStaticQuery(query);
  const sidebarItems = allFile.edges.reduce((currentItems, node) => {
    const item = node.node;
    let relativeDirectory = item.relativeDirectory || '';
    return { ...currentItems, [relativeDirectory]: [...(currentItems[relativeDirectory] || []), item] };
  }, {});

  const [searchText, setSearchText] = React.useState('');

  return (
    <Stack spacing="major-1" paddingY="major-2" {...props}>
      <SideNav
        selectedId={path}
        overrides={{
          SideNav: {
            Level: {
              Title: {
                styles: {
                  base: css`
                    font-size: 14px;
                    font-weight: bold;
                    padding-left: 1.25rem;
                  `,
                },
              },
            },
            Item: {
              styles: {
                base: (props) => css`
                  ${props.theme?.SideNav?.Item?.css?.base?.(props) || ''}

                  padding-left: 1.25rem;
                  font-size: 14px;
                  font-weight: 500;
                  min-height: 2.25em !important;
                  height: 2.25em !important;
                  text-transform: unset !important;
                `,
              },
            },
          },
        }}
      >
        <SearchInput
          before={<Input.Icon color="gray200" icon="solid-search" />}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Search..."
          marginX="major-2"
          marginBottom="major-2"
        />
        {orders.map((orderItem) => {
          return (
            <SideNavItem
              key={Object.keys(orderItem)[0]}
              orderItem={orderItem}
              searchText={searchText}
              sidebar={sidebar}
              sidebarItems={sidebarItems}
            />
          );
        })}
      </SideNav>
    </Stack>
  );
}

function SideNavItem({ orderItem, searchText, sidebarItems, sidebar }: any) {
  const sideNavItemRef = React.useRef();
  const [show, setShow] = React.useState(true);

  const key = Object.keys(orderItem)[0];
  const itemOrders = orderItem[key];

  let items = sidebarItems[key];
  if (itemOrders.length > 0) {
    items = _uniqBy(
      [...itemOrders.map((itemOrder) => items.find((item) => itemOrder === item.name)), ...items],
      'name'
    );
  }

  React.useEffect(() => {
    // @ts-ignore
    if (sideNavItemRef.current && !sideNavItemRef.current.querySelector('li')) {
      console.log('test');
      setShow(false);
    } else {
      setShow(true);
    }
  }, [searchText]);

  return (
    <Box ref={sideNavItemRef}>
      <SideNav.Level title={_startCase(key)} display={!show ? 'none' : undefined}>
        {(items || []).map((item) => {
          const frontmatter = item.childMdx?.frontmatter || {};
          const title = frontmatter.title || _startCase(item.name).replace(/\s/g, '');
          if (!searchText || title.toLowerCase().includes(searchText.toLowerCase())) {
            return (
              <SideNav.Item
                key={item.name}
                onClick={sidebar.drawer.hide}
                navId={frontmatter.path || `/${item.relativeDirectory}/${item.name}/`}
              >
                <Link
                  to={`${frontmatter.path || `/${item.relativeDirectory}/${item.name}/`}${
                    typeof window !== 'undefined' ? window.location.search : ''
                  }`}
                >
                  {title}
                </Link>
              </SideNav.Item>
            );
          }
          return null;
        })}
      </SideNav.Level>
    </Box>
  );
}
