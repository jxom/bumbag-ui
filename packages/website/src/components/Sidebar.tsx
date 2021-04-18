import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Box, Input, Stack, SideNav as _SideNav, usePage, applyTheme } from 'bumbag';
import _startCase from 'lodash/startCase';
import _uniqBy from 'lodash/uniqBy';

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

const SideNav = applyTheme(_SideNav, {
  Level: {
    Title: {
      styles: {
        base: {
          paddingLeft: 'minor-5',
          fontSize: '150',
          fontWeight: '700',
          color: 'text',
        },
      },
    },
  },
  Item: {
    styles: {
      base: {
        paddingLeft: 'minor-5',
        fontSize: '150',
        fontWeight: '500',
        minHeight: '2.25em',
        height: '2.25em',
        textTransform: 'unset',
      },
    },
  },
});

export default function Sidebar(props: any) {
  const { items, orders, path } = props;

  const { sidebar } = usePage();
  const [searchText, setSearchText] = React.useState('');

  return (
    <Stack spacing="major-1" paddingY="major-2" {...props}>
      <SideNav selectedId={path}>
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
              sidebarItems={items}
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

  let items = sidebarItems[key] || sidebarItems;
  if (itemOrders.length > 0) {
    items = _uniqBy(
      [...itemOrders.map((itemOrder) => items.find((item) => itemOrder === item.name)), ...items],
      'name'
    );
  }

  React.useEffect(() => {
    // @ts-ignore
    if (sideNavItemRef.current && !sideNavItemRef.current.querySelector('li')) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [searchText]);

  return (
    <Box ref={sideNavItemRef}>
      <SideNav.Level title={_startCase(key)} display={!show ? 'none' : undefined}>
        {(items || []).filter(Boolean).map((item) => {
          const frontmatter = item.childMdx?.frontmatter || {};
          const title = frontmatter.title || _startCase(item.name).replace(/\s/g, '');
          if (!searchText || title.toLowerCase().includes(searchText.toLowerCase())) {
            return (
              <SideNav.Item
                key={item.name}
                onClick={() => setTimeout(sidebar.drawer.hide, 100)}
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
