import * as React from 'react';
import { Platform } from 'react-native';
import { Provider as BumbagProvider, ProviderProps } from 'bumbag/Provider';
import { GlobalStyles } from 'bumbag/Provider/GlobalStyles';
import { ThemeProvider as CoreThemeProvider } from 'bumbag/styled';
import { useTheme } from 'bumbag/utils/useTheme';
import { merge } from 'bumbag/utils/merge';

import { ThemeConfig } from '../types/theme';
import theme from '../theme';
import { ThemeProvider } from '../styled';

export function Provider(props: Omit<ProviderProps, 'theme'> & { theme?: ThemeConfig }) {
  const { children, theme: themeOverrides, isStandalone, ...restProps } = props;

  const { theme: coreTheme } = useTheme();

  let newTheme = themeOverrides || {};
  if (!isStandalone) {
    newTheme = merge(coreTheme, {
      // @ts-ignore
      native: merge(theme, newTheme),
      breakpoints: merge(theme.breakpoints || {}, newTheme.breakpoints || {}),
    });
  }

  return (
    // @ts-ignore
    <BumbagProvider platform="native" theme={newTheme} {...restProps}>
      {({ theme }) => (
        <CoreThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            {process.env.NODE_ENV !== 'test' && Platform.OS === 'web' && <GlobalStyles />}
            {children}
          </ThemeProvider>
        </CoreThemeProvider>
      )}
    </BumbagProvider>
  );
}
