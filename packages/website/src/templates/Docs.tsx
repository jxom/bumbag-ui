import React from 'react';
import * as fannypack from 'fannypack';
import { MDXProvider } from '@mdx-js/react';

import LiveCode from '../components/LiveCode';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

type Props = {
  children: React.ReactNode;
  pageContext: any;
  path: string;
};

export default function Docs(props: Props) {
  const { children, pageContext, path } = props;

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
    }),
    []
  );

  return (
    <fannypack.PageWithHeader sticky header={<Header />}>
      <fannypack.PageWithSidebar sidebar={<Sidebar path={path} />}>
        <fannypack.PageContent breakpoint={pageContext.frontmatter.breakpoint || 'desktop'}>
          <MDXProvider components={components}>{children}</MDXProvider>
        </fannypack.PageContent>
      </fannypack.PageWithSidebar>
    </fannypack.PageWithHeader>
  );
}
