import React from 'react';
import * as fannypack from 'fannypack';
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
      blockquote: (props: any) => (
        <fannypack.Blockquote
          backgroundColor="primaryTint"
          borderColor="primary"
          marginTop="major-2"
          marginBottom="major-2"
          {...props}
        />
      ),
      h1: (props: any) => <fannypack.Heading {...props} />,
      h2: (props: any) => <fannypack.Heading use="h2" marginTop="major-6" {...props} />,
      h3: (props: any) => <fannypack.Heading use="h3" marginTop="major-6" {...props} />,
      h4: (props: any) => <fannypack.Heading use="h4" marginTop="major-6" {...props} />,
      h5: (props: any) => <fannypack.Heading use="h5" marginTop="major-6" {...props} />,
      h6: (props: any) => <fannypack.Heading use="h6" marginTop="major-6" {...props} />,
      p: (props: any) => <fannypack.Paragraph {...props} />,
      strong: (props: any) => <fannypack.Text fontWeight="semibold" {...props} />,
      pre: (props: any) => <LiveCode {...props.children.props} />
    }),
    []
  );

  return (
    <fannypack.Provider>
      <MDXProvider components={components}>{children}</MDXProvider>
    </fannypack.Provider>
  );
}
