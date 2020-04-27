import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as fannypack from 'fannypack';
import HighlightedCode from 'fannypack-addon-highlighted-code';
import { MDXProvider } from '@mdx-js/react';

import LiveCode from '../components/LiveCode';
import Sidebar from '../components/Sidebar';

type Props = {
  children: React.ReactNode;
  path: string;
};

export default function Docs(props: Props) {
  const { children, path } = props;

  const components = React.useMemo(
    () => ({
      ...fannypack,
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
      p: (props: any) => <fannypack.Paragraph {...props} />,
      strong: (props: any) => <fannypack.Text fontWeight="semibold" {...props} />,
      pre: (props: any) => <LiveCode {...props.children.props} />
    }),
    []
  );

  return (
    <fannypack.PageWithSidebar sidebar={<Sidebar path={path} />}>
      <fannypack.PageContent breakpoint="desktop">
        <MDXProvider components={components}>{children}</MDXProvider>
      </fannypack.PageContent>
    </fannypack.PageWithSidebar>
  );
}
