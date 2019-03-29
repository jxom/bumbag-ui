import React from 'react';
import MDXStyle from 'mdx-style';
import Link from 'next/link';
import * as fannypack from 'fannypack';
import Component from '@reactions/component';

import Content from './Content';
import LiveEditor from './LiveEditor';
import Sidebar from './Sidebar';
import { useDocsContext } from './DocsContext';

const components = {
  ...fannypack,
  Component,
  a: ({ href, ...props }) => (
    <Link href={href} prefetch>
      <fannypack.Link href={href} {...props} />
    </Link>
  ),
  blockquote: ({ children }) => (
    <fannypack.Blockquote
      backgroundColor="primaryTint"
      borderColor="primary"
      marginTop="major-2"
      marginBottom="major-2"
    >
      {children}
    </fannypack.Blockquote>
  ),
  h1: ({ children, className, ...props }) => <fannypack.Heading {...props}>{children}</fannypack.Heading>,
  h2: ({ children, className, ...props }) => (
    <fannypack.Heading use="h2" marginTop="major-6" {...props}>
      {children}
    </fannypack.Heading>
  ),
  h3: ({ children, className, ...props }) => (
    <fannypack.Heading use="h3" marginTop="major-6" {...props}>
      {children}
    </fannypack.Heading>
  ),
  h4: ({ children, className, ...props }) => (
    <fannypack.Heading use="h4" marginTop="major-6" {...props}>
      {children}
    </fannypack.Heading>
  ),
  h5: ({ children, className, ...props }) => (
    <fannypack.Heading use="h5" marginTop="major-6" {...props}>
      {children}
    </fannypack.Heading>
  ),
  h6: ({ children, className, ...props }) => (
    <fannypack.Heading use="h6" marginTop="major-6" {...props}>
      {children}
    </fannypack.Heading>
  ),
  hr: ({ children }) => <fannypack.Divider>{children}</fannypack.Divider>,
  p: ({ children }) => <fannypack.Paragraph>{children}</fannypack.Paragraph>,
  strong: ({ children }) => <fannypack.Text fontWeight="semibold">{children}</fannypack.Text>,
  em: ({ children }) => <fannypack.Text use="em">{children}</fannypack.Text>,
  ul: ({ children }) => (
    <fannypack.List listStyleType="disc" listStylePosition="inside">
      {children}
    </fannypack.List>
  ),
  ol: ({ children }) => (
    <fannypack.List isOrdered listStylePosition="inside">
      {children}
    </fannypack.List>
  ),
  li: ({ children }) => <fannypack.List.Item>{children}</fannypack.List.Item>,
  code: ({ children }) => <fannypack.Code>{children}</fannypack.Code>,
  table: ({ children }) => (
    <fannypack.Table isFullWidth isStriped>
      {children}
    </fannypack.Table>
  ),
  tbody: ({ children }) => <fannypack.Table.Body>{children}</fannypack.Table.Body>,
  thead: ({ children }) => <fannypack.Table.Head>{children}</fannypack.Table.Head>,
  tfoot: ({ children }) => <fannypack.Table.Foot>{children}</fannypack.Table.Foot>,
  tr: ({ children }) => <fannypack.Table.Row>{children}</fannypack.Table.Row>,
  td: ({ children }) => <fannypack.Table.Cell>{children}</fannypack.Table.Cell>,
  th: ({ children }) => <fannypack.Table.HeadCell>{children}</fannypack.Table.HeadCell>,
  img: ({ children, ...props }) => <fannypack.Image {...props}>{children}</fannypack.Image>,
  pre: props => (
    <LiveEditor
      fallback={props => <fannypack.HighlightedCode isBlock marginBottom="major-4" {...props} />}
      {...props}
    />
  )
};

function Layout(props) {
  const { children } = props;
  const { layout, route } = useDocsContext();

  function handleChangeTheme(e) {
    const theme = e.target.value;
    layout.changeTheme(theme);
  }

  return (
    <fannypack.Flex width="100%">
      {layout.isMobile && (
        <fannypack.Button
          backgroundColor="white"
          onClick={layout.openMenu}
          position="fixed"
          kind="ghost"
          height="20px"
          left="0.5rem"
          top="0.5rem"
        >
          <fannypack.Icon icon="solid-bars" />
        </fannypack.Button>
      )}
      <Sidebar route={route} />
      <Content breakpoint={route.breakpoint}>
        <MDXStyle components={{ ...components }}>{children}</MDXStyle>
      </Content>
      <fannypack.Box fixed top="0.5rem" right="0.5rem" borderRadius="3px">
        <fannypack.Select
          border="5px solid white"
          onChange={handleChangeTheme}
          options={[{ label: 'Theme: Default', value: 'default' }]}
          size={layout.isMobile ? 'small' : undefined}
          value={layout.themeName}
        />
      </fannypack.Box>
    </fannypack.Flex>
  );
}

export default fannypack.withTheme(Layout);
