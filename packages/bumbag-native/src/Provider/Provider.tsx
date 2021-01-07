import * as React from 'react';

import { ThemeProvider as EmotionProvider } from 'bumbag/styled';
import buildTheme from 'bumbag/theme';
import { LayoutBreakpoint, ThemeConfig } from 'bumbag/types';

import { ColorModeProvider } from 'bumbag/ColorMode/ColorModeContext';
import { BumbagThemeContext } from 'bumbag/Provider/ThemeContext';

export type ProviderProps = {
  children: React.ReactNode;
  isStandalone?: boolean;
  collapseBelow?: LayoutBreakpoint;
  colorMode?: string;
  isSSR?: boolean;
  theme?: ThemeConfig;
};

Provider.defaultProps = {
  colorMode: 'default',
};

export function Provider(props: ProviderProps) {
  const { children, colorMode, isSSR, isStandalone, theme: _theme } = props;

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
    <BumbagThemeContext.Provider value={themeContextValue}>
      <EmotionProvider theme={derivedTheme}>
        <ColorModeProvider isSSR={isSSR} mode={colorMode}>
          {children}
        </ColorModeProvider>
      </EmotionProvider>
    </BumbagThemeContext.Provider>
  );
}
