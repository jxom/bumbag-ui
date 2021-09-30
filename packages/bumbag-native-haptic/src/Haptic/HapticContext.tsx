import * as React from 'react';

export const HapticContext = React.createContext<{ enabled?: boolean; setEnabled?: (enabled?: boolean) => void }>({
  enabled: true,
  setEnabled: () => null,
});

export let globalEnabled = true;

export function HapticProvider({
  defaultEnabled = true,
  children,
}: {
  defaultEnabled?: boolean;
  children: React.ReactNode;
}) {
  const [enabled, setEnabled] = React.useState(defaultEnabled);

  return (
    <HapticContext.Provider
      value={{
        enabled,
        setEnabled: (value) => {
          globalEnabled = value;
          setEnabled(value);
        },
      }}
    >
      {children}
    </HapticContext.Provider>
  );
}

export const useHapticContext = () => {
  const context = React.useContext(HapticContext);
  return context;
};
