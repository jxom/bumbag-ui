import * as React from 'react';

import { IdProvider } from '../utils/uniqueId';
import { ThemeProvider } from '../styled';
import buildTheme from '../theme';
import { LayoutBreakpoint, ThemeConfig } from '../types';
import { ToastProvider } from '../Toast';
import { PageProvider } from '../Page/PageContext';
import { Box } from '../Box';

import GlobalStyles from './GlobalStyles';

export type ProviderProps = {
  children: React.ReactNode;
  isStandalone?: boolean;
  collapseBreakpoint?: LayoutBreakpoint;
  theme?: ThemeConfig;
};

export function Provider(props: ProviderProps) {
  const { children, collapseBreakpoint, isStandalone, theme } = props;

  const derivedTheme = React.useMemo(() => {
    if (theme && isStandalone) {
      return theme;
    }
    return buildTheme(theme);
  }, [isStandalone, theme]);

  return (
    <ThemeProvider theme={derivedTheme}>
      <IdProvider>
        <ToastProvider>
          <PageProvider collapseBreakpoint={collapseBreakpoint}>
            <React.Fragment>
              {process.env.NODE_ENV !== 'test' && <GlobalStyles />}
              {process.env.NODE_ENV === 'test' ? children : <Box>{children}</Box>}
            </React.Fragment>
          </PageProvider>
        </ToastProvider>
      </IdProvider>
    </ThemeProvider>
  );
}
