import * as React from 'react';

import { IdProvider } from '../utils/uniqueId';
import { ThemeProvider } from '../styled';
import buildTheme from '../theme';
import { ThemeConfig } from '../types';
import { ToastProvider } from '../Toast';

import GlobalStyles from './GlobalStyles';

export type ProviderProps = {
  children: React.ReactNode;
  isStandalone?: boolean;
  theme?: ThemeConfig;
};

export function Provider(props: ProviderProps) {
  const { children, isStandalone, theme } = props;

  const derivedTheme = React.useMemo(
    () => {
      if (theme && isStandalone) {
        return theme;
      }
      return buildTheme(theme);
    },
    [isStandalone, theme]
  );

  return (
    <ThemeProvider theme={derivedTheme}>
      <IdProvider>
        <ToastProvider>
          <React.Fragment>
            {process.env.NODE_ENV !== 'test' && <GlobalStyles />}
            {children}
          </React.Fragment>
        </ToastProvider>
      </IdProvider>
    </ThemeProvider>
  );
}
