import * as React from 'react';
import { Platform } from 'react-native';
import { Provider as BumbagProvider, ProviderProps } from 'bumbag/Provider';
import { merge } from 'bumbag/utils/merge';

import { ThemeConfig } from '../types/theme';
import theme from '../theme';
import { ThemeProvider } from '../styled';

export function Provider(props: Omit<ProviderProps, 'theme'> & { theme?: ThemeConfig }) {
  const { children, theme: themeOverrides, isStandalone, ...restProps } = props;

  let newTheme = themeOverrides || {};
  if (!isStandalone) {
    newTheme = {
      // @ts-ignore
      native: merge(theme, newTheme),
      breakpoints: merge(theme.breakpoints || {}, newTheme.breakpoints || {}),
    };
  }

  return (
    // @ts-ignore
    <BumbagProvider platform={Platform.OS === 'web' ? 'web' : 'native'} theme={newTheme} {...restProps}>
      {({ theme }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>}
    </BumbagProvider>
  );
}
