import * as React from 'react';

import { useLocalStorage } from '../utils/useLocalStorage';
import { useTheme } from '../utils/useTheme';
import { addColorModeBodyClassName, getDefaultColorMode } from './utils';

export const ColorModeContext = React.createContext<any>({ setColorMode: () => {}, colorMode: 'default' });

type Props = {
  children: React.ReactNode;
  mode: string;
};

export function ColorModeProvider(props: Props) {
  const { children, mode: _defaultMode } = props;

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

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}

export function useColorMode() {
  return React.useContext(ColorModeContext);
}
