import * as React from 'react';
import { Platform } from 'react-native';
import { Provider as BumbagProvider, ProviderProps } from 'bumbag/Provider';

import { ThemeProvider } from '../styled';

export function Provider(props: ProviderProps) {
  const { children, ...restProps } = props;
  return (
    <BumbagProvider platform={Platform.OS === 'web' ? 'web' : 'native'} {...restProps}>
      {({ theme }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>}
    </BumbagProvider>
  );
}
