import * as React from 'react';

export const ColorModeContext = React.createContext<any>({ setColorMode: () => {}, colorMode: 'default' });

type Props = {
  children: React.ReactNode;
  mode: string;
};

export function Provider(props: Props) {
  const { children, mode: _mode } = props;

  ////////////////////////////////////

  const [mode, setMode] = React.useState(_mode);
  React.useEffect(() => {
    setMode(mode);
  }, [mode]);

  ////////////////////////////////////

  const value = React.useMemo(
    () => ({
      colorMode: mode,
      setColorMode: setMode,
    }),
    [mode]
  );

  ////////////////////////////////////

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}
