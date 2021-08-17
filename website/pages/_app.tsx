import * as React from 'react';
import type { AppProps } from 'next/app';
import { Provider as BumbagProvider } from 'bumbag';
import { Provider as NativeProvider } from 'bumbag-native';

function App({ Component, pageProps }: AppProps) {
  return (
    <BumbagProvider isSSR>
      <NativeProvider>
        <Component {...pageProps} />
      </NativeProvider>
    </BumbagProvider>
  );
}
export default App;
