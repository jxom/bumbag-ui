import * as React from 'react';

import { IdProvider } from '../utils/uniqueId';
import { ThemeProvider as EmotionProvider } from '../styled';
import buildTheme from '../theme';
import { LayoutBreakpoint, ThemeConfig } from '../types';
import { ToastProvider } from '../Toast';
import { PageProvider } from '../Page/PageContext';
import { Box } from '../Box';

import GlobalStyles from './GlobalStyles';
import { FannypackThemeContext } from './ThemeContext';

export type ProviderProps = {
  children: React.ReactNode;
  isStandalone?: boolean;
  collapseBreakpoint?: LayoutBreakpoint;
  theme?: ThemeConfig;
};

export function Provider(props: ProviderProps) {
  const { children, collapseBreakpoint, isStandalone, theme: _theme } = props;

  ////////////////////////////////////////////////

  const [theme, setTheme] = React.useState(_theme);
  React.useEffect(() => {
    setTheme(_theme);
  }, [_theme]);

  ////////////////////////////////////////////////

  const derivedTheme = React.useMemo(() => {
    if (theme && isStandalone) {
      return theme;
    }
    return buildTheme(theme);
  }, [isStandalone, theme]);

  ////////////////////////////////////////////////

  const themeContextValue = React.useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  ////////////////////////////////////////////////

  return (
    <FannypackThemeContext.Provider value={themeContextValue}>
      <EmotionProvider theme={derivedTheme}>
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
      </EmotionProvider>
    </FannypackThemeContext.Provider>
  );
}
