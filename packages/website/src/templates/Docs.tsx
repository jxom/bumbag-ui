import React from 'react';
import * as fannypack from 'fannypack';
import HighlightedCode from 'fannypack-addon-highlighted-code';
import { MDXProvider } from '@mdx-js/react';

import LiveCode from '../components/LiveCode';

type Props = {
  children: React.ReactNode;
};

export default function Docs(props: Props) {
  const { children } = props;

  const components = React.useMemo(
    () => ({
      ...fannypack,
      HighlightedCode,
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
      inlineCode: (props: any) => <fannypack.Code {...props} />,
      h1: (props: any) => <fannypack.Heading marginBottom="major-4" {...props} />,
      h2: (props: any) => (
        <fannypack.Heading use="h2" fontSize="500" marginTop="major-6" marginBottom="major-4" {...props} />
      ),
      h3: (props: any) => (
        <fannypack.Heading fontSize="400" use="h3" marginTop="major-6" marginBottom="major-2" {...props} />
      ),
      h4: (props: any) => <fannypack.Heading use="h4" marginTop="major-6" marginBottom="major-2" {...props} />,
      h5: (props: any) => <fannypack.Heading use="h5" marginTop="major-6" marginBottom="major-2" {...props} />,
      h6: (props: any) => <fannypack.Heading use="h6" marginTop="major-6" marginBottom="major-2" {...props} />,
      p: (props: any) => <fannypack.Paragraph {...props} />,
      strong: (props: any) => <fannypack.Text fontWeight="semibold" {...props} />,
      pre: (props: any) => <LiveCode {...props.children.props} />
    }),
    []
  );

  return (
    <fannypack.Provider>
      <fannypack.Box padding="major-4">
        <MDXProvider components={components}>{children}</MDXProvider>
      </fannypack.Box>
    </fannypack.Provider>
  );
}
