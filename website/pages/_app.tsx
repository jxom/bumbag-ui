import 'bumbag-native/utils/resetWindow';
import * as React from 'react';
import NextApp from 'next/app';
import type { AppProps } from 'next/app';
import { Provider as BumbagProvider, Box, ToastManager } from 'bumbag';
import { Provider as NativeProvider, Box as NativeBox } from 'bumbag-native';

import styled from '@emotion/native';

import theme from '../theme';

const TestBox = styled.View`
  background-color: red;
  height: 20px;
  width: 20px;
`;

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);

  return { ...appProps };
};

function App({ Component, pageProps }: AppProps) {
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
