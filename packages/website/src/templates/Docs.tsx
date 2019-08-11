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
