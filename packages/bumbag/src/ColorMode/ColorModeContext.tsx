import * as React from 'react';

import { useLocalStorage } from '../utils/useLocalStorage';
import { useTheme } from '../utils/useTheme';
import { addColorModeBodyClassName, getDefaultColorMode } from './utils';

export const ColorModeContext = React.createContext<any>({ setColorMode: () => {}, colorMode: 'default' });

type Props = {
  children: React.ReactNode;
  mode: string;
  isSSR?: boolean;
};

ColorModeProvider.defaultProps = {
  isSSR: false,
};

export function ColorModeProvider(props: Props) {
  const { children, mode: _defaultMode, isSSR } = props;

  ////////////////////////////////////

  const { theme } = useTheme();
  const localStorage = useLocalStorage();

  const defaultMode = React.useMemo(() => getDefaultColorMode(_defaultMode, { localStorage, theme }), [_defaultMode]); // eslint-disable-line

  ////////////////////////////////////

  const [mode, setMode] = React.useState(defaultMode);

  ////////////////////////////////////

  React.useEffect(() => {
    addColorModeBodyClassName(defaultMode);
    localStorage.set('mode', defaultMode);
  }, [defaultMode]); // eslint-disable-line

  ////////////////////////////////////

  const setColorMode = React.useCallback(
    (colorMode) => {
      addColorModeBodyClassName(colorMode, mode);
      localStorage.set('mode', colorMode);
      setMode(colorMode);
    },
    [localStorage, mode]
  );

  ////////////////////////////////////

  const value = React.useMemo(
    () => ({
      colorMode: mode,
      setColorMode,
    }),
    [mode, setColorMode]
  );

  ////////////////////////////////////

  const [mounted, setMounted] = React.useState(false);
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true);
    }
  }, []);

  ////////////////////////////////////

  if (isSSR && !mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }
  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}

export function useColorMode() {
  return React.useContext(ColorModeContext);
}
