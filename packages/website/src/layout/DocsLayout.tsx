import React from 'react';
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import * as fannypack from 'fannypack';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SEO from '../components/SEO';
import LiveCode from '../components/LiveCode';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import _TableOfContents from '../components/TableOfContents';

type Props = {
  children: React.ReactNode;
  pageContext: any;
  path: string;
};

const TableOfContents = fannypack.styled(_TableOfContents)`
  position: fixed;
  top: 100px;
  right: 1rem;
  opacity: ${(props) => (!props.isFluid ? '1' : '0')};
  overflow: auto;
  max-height: calc(100vh - 200px);
  width: 250px;
  border-left: 1px solid #ebebeb;
  padding-left: 1rem;

  @media screen and (max-width: ${(props) => fannypack.theme(`breakpoints.${props.breakpoint}`)(props) + 832}px) {
    opacity: 0;
  }
`;

export default function Docs(props: Props) {
  const { pageContext, path } = props;

  //////////////////////////////////////////////////////////////////////

  const components = React.useMemo(
    () => ({
      ...fannypack,
      a: (props: any) => <fannypack.Link {...props} />,
      blockquote: (props: any) => (
        <fannypack.Blockquote
          backgroundColor="primaryTint"
          borderColor="primary"
          marginTop="major-2"
          marginBottom="major-2"
          {...props}
        />
      ),
      code: (props: any) => <fannypack.Code {...props} />,
      inlineCode: (props: any) => <fannypack.Code {...props} palette="primary" />,
      h1: (props: any) => <fannypack.Heading marginBottom="major-4" {...props} />,
      h2: (props: any) => (
        <fannypack.Heading use="h2" fontSize="500" marginTop="major-6" marginBottom="major-4" {...props} />
      ),
      h3: (props: any) => (
        <fannypack.Heading fontSize="400" use="h3" marginTop="major-4" marginBottom="major-3" {...props} />
      ),
      h4: (props: any) => (
        <fannypack.Heading fontSize="300" use="h4" marginTop="major-4" marginBottom="major-2" {...props} />
      ),
      h5: (props: any) => <fannypack.Heading use="h5" marginTop="major-4" marginBottom="major-2" {...props} />,
      h6: (props: any) => <fannypack.Heading use="h6" marginTop="major-4" marginBottom="major-2" {...props} />,
      p: (props: any) => (
        <fannypack.Paragraph
          {...props}
          overrides={{
            Paragraph: {
              css: {
                root: fannypack.css`
                  &:not(:last-child) {
                    margin-bottom: 1rem;
                  }
                `,
              },
            },
          }}
        />
      ),
      strong: (props: any) => <fannypack.Text fontWeight="semibold" {...props} />,
      pre: (props: any) => <LiveCode {...props.children.props} />,
      table: (props: any) => <fannypack.Table marginBottom="major-4" marginTop="major-4" {...props} />,
      th: (props: any) => <fannypack.Table.HeadCell {...props} />,
      tr: (props: any) => <fannypack.Table.Row {...props} />,
      td: (props: any) => <fannypack.Table.Cell {...props} />,
      tbody: (props: any) => <fannypack.Table.Body {...props} />,
      thead: (props: any) => <fannypack.Table.Head {...props} />,
    }),
    []
  );

  //////////////////////////////////////////////////////////////////////

  const showTableOfContents = fannypack.useBreakpoint('min-fullHD');

  //////////////////////////////////////////////////////////////////////

  return (
    <React.Fragment>
      <SEO title={pageContext.frontmatter?.seoTitle || pageContext.frontmatter?.title} />
      <fannypack.PageWithHeader sticky header={<Header />}>
        <fannypack.PageWithSidebar sidebar={<Sidebar path={path} />} sidebarPlacement="left">
          <TableOfContents
            breakpoint={pageContext.frontmatter.breakpoint || 'tablet'}
            isFluid={pageContext.frontmatter.isFluid}
            toc={pageContext.tableOfContents}
          />
          <fannypack.PageContent
            isLayout={Boolean(pageContext.frontmatter.isFluid)}
            isFluid={Boolean(pageContext.frontmatter.isFluid)}
            breakpoint={pageContext.frontmatter.breakpoint || 'tablet'}
          >
            <MDXProvider components={components}>
              <MDXRenderer>{pageContext.mdxBody}</MDXRenderer>
            </MDXProvider>
          </fannypack.PageContent>
          <fannypack.PageContent>
            <Footer />
          </fannypack.PageContent>
        </fannypack.PageWithSidebar>
      </fannypack.PageWithHeader>
    </React.Fragment>
  );
}
