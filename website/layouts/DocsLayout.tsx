import React from 'react';
import * as bumbag from 'bumbag';

import SEO from '../components/SEO';
import Header from '../components/Header';
import DocsSidebar from '../components/Docs/Sidebar';
import NativeSidebar from '../components/Native/Sidebar';
import Footer from '../components/Footer';
import _TableOfContents from '../components/TableOfContents';

const Sidebars = {
  web: DocsSidebar,
  native: NativeSidebar,
};

const TableOfContents = bumbag.styled(_TableOfContents)`
  position: fixed;
  top: 100px;
  right: 2rem;
  overflow: auto;
  max-height: calc(100vh - 200px);
  width: 300px;
  border-left: 1px solid ${bumbag.palette('white800')};
  padding-left: 1rem;
`;

export default function Docs(props) {
  const { children, mdxFiles = [], frontmatter = {}, platform = 'web', path = '', toc } = props;

  //////////////////////////////////////////////////////////////////////

  const title = props.title || frontmatter?.seoTitle || frontmatter?.title;
  const breakpoint = props.breakpoint || frontmatter?.breakpoint || 'tablet';
  const isFluid = props.isFluid || frontmatter?.isFluid;

  //////////////////////////////////////////////////////////////////////

  const Sidebar = Sidebars[platform];

  return (
    <React.Fragment>
      <SEO title={title} />
      <bumbag.PageWithHeader sticky header={<Header />}>
        <bumbag.PageWithSidebar
          sidebar={<Sidebar mdxFiles={mdxFiles} path={path} />}
          sidebarPlacement="left"
          sidebarWidth="270px"
          overrides={{
            PageWithSidebar: {
              Content: {
                styles: {
                  base: (props) => bumbag.css`
                    ${bumbag.breakpoint(
                      'max-fullHD',
                      bumbag.css`
                      padding-right: 0px;
                    `,
                      {
                        else: bumbag.css`
                          padding-right: calc(300px + 2rem);
                        `,
                      }
                    )(props)}
                  `,
                },
              },
            },
          }}
        >
          <bumbag.PageContent
            align="center"
            display="flex"
            isLayout={isFluid}
            isFluid={isFluid}
            breakpoint={breakpoint}
            use="main"
            id="main-content"
          >
            <bumbag.Box width="100%">{children}</bumbag.Box>
            <bumbag.Hide below="fullHD">{toc && <TableOfContents breakpoint={breakpoint} toc={toc} />}</bumbag.Hide>
          </bumbag.PageContent>
          <bumbag.PageContent>
            <Footer />
          </bumbag.PageContent>
        </bumbag.PageWithSidebar>
      </bumbag.PageWithHeader>
    </React.Fragment>
  );
}
