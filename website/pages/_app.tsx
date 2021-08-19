import 'bumbag-native/utils/resetWindow';
import * as React from 'react';
import NextApp from 'next/app';
import { Provider as BumbagProvider, Box, ToastManager } from 'bumbag';
import { Provider as NativeProvider, Box as NativeBox } from 'bumbag-native';

import theme from '../theme';

function App({ Component, pageProps }: any) {
  const getLayout = (Component as any).getLayout || ((page) => page);

  return (
    <BumbagProvider isSSR theme={theme as any}>
      <NativeProvider theme={theme as any}>
        {getLayout(<Component {...pageProps} />)}
        <ToastManager isStacked={false} />
      </NativeProvider>
    </BumbagProvider>
  );
}

export default App;
