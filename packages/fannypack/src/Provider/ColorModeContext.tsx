import * as React from 'react';

import { useLocalStorage } from '../utils/useLocalStorage';
import { useTheme } from '../utils/useTheme';

export const ColorModeContext = React.createContext<any>({ setColorMode: () => {}, colorMode: 'default' });

type Props = {
  children: React.ReactNode;
  mode: string;
};

export function Provider(props: Props) {
  const { children, mode: _defaultMode } = props;

  ////////////////////////////////////

  const { theme } = useTheme();
  const localStorage = useLocalStorage();

  const defaultMode = React.useMemo(() => getDefaultMode(_defaultMode, { localStorage, theme }), [
    _defaultMode,
    localStorage,
    theme,
  ]);

  ////////////////////////////////////

  const [mode, setMode] = React.useState(defaultMode);

  ////////////////////////////////////

  React.useEffect(() => {
    localStorage.set('colorMode', defaultMode);
  }, [defaultMode, localStorage]);

  ////////////////////////////////////

  const setColorMode = React.useCallback(
    (colorMode) => {
      setMode(colorMode);
      localStorage.set('colorMode', colorMode);
    },
    [localStorage]
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

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}

function getDefaultMode(mode, { localStorage, theme }) {
  const { useSystemColorMode } = theme.modes;
  let defaultMode = mode;
  if (
    useSystemColorMode &&
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    defaultMode = 'dark';
  }
  if (localStorage.get('colorMode')) {
    defaultMode = localStorage.get('colorMode');
  }
  return defaultMode;
}
