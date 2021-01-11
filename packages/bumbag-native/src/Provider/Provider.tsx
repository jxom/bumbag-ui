import * as React from 'react';
import { Platform } from 'react-native';
import { Provider as BumbagProvider, ProviderProps } from 'bumbag/Provider';
import { merge } from 'bumbag/utils/merge';

import theme from '../theme';
import { ThemeProvider } from '../styled';

export function Provider(props: ProviderProps) {
  const { children, theme: themeOverrides, isStandalone, ...restProps } = props;

  let newTheme = themeOverrides || {};
  if (!isStandalone) {
    newTheme = merge(theme, newTheme);
  }

  return (
    <BumbagProvider platform={Platform.OS === 'web' ? 'web' : 'native'} theme={newTheme} {...restProps}>
      {({ theme }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>}
    </BumbagProvider>
  );
}
