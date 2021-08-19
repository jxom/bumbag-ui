import * as React from 'react';
import { Platform } from 'react-native';
import { Provider as BumbagProvider, ProviderProps } from 'bumbag/Provider';
import { GlobalStyles } from 'bumbag/Provider/GlobalStyles';
import { ThemeProvider as CoreThemeProvider } from 'bumbag/styled';
import { useTheme } from 'bumbag/utils/useTheme';
import { merge } from 'bumbag/utils/merge';

import { ThemeConfig } from '../types/theme';
import { ThemeProvider as NativeThemeProvider } from '../styled';
import buildTheme from '../theme';

export function Provider(props: Omit<ProviderProps, 'theme'> & { theme?: ThemeConfig }) {
  const { children, theme: themeOverrides, isStandalone, ...restProps } = props;

  const { isSSR, theme: coreTheme } = useTheme();

  const newTheme = React.useCallback(() => {
    let newTheme = themeOverrides || {};
    if (!isStandalone) {
      const nativeTheme = buildTheme(themeOverrides);
      newTheme = merge(coreTheme, {
        // @ts-ignore
        native: nativeTheme,
        ...nativeTheme,
      });
    }
    return newTheme;
  }, [coreTheme, isStandalone, themeOverrides]);

  const [mounted, setMounted] = React.useState(false);
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  useIsomorphicLayoutEffect(() => {
    if (isSSR && typeof window !== 'undefined') {
      setMounted(true);
    }
  }, []);

  if (isSSR && !mounted) return null;
  return (
    // @ts-ignore
    <BumbagProvider platform="native" theme={newTheme} {...restProps}>
      {({ theme }) => (
        <CoreThemeProvider theme={theme}>
          <NativeThemeProvider theme={theme}>
            {process.env.NODE_ENV !== 'test' && Platform.OS === 'web' && <GlobalStyles />}
            {children}
          </NativeThemeProvider>
        </CoreThemeProvider>
      )}
    </BumbagProvider>
  );
}
