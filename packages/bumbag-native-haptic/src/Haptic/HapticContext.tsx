import * as React from 'react';

export const HapticContext = React.createContext<{ enabled?: boolean; setEnabled?: (enabled?: boolean) => void }>({
  enabled: true,
  setEnabled: () => null,
});

export let globalEnabled = true;

export function HapticProvider({
  defaultEnabled = true,
  enabled: enabledOverride,
  children,
}: {
  defaultEnabled?: boolean;
  enabled?: boolean;
  children: React.ReactNode;
}) {
  const [enabled, setEnabled] = React.useState(enabledOverride || defaultEnabled || globalEnabled);

  React.useEffect(() => {
    if (enabledOverride) {
      globalEnabled = enabledOverride;
      setEnabled(enabledOverride);
    }
  }, [enabledOverride]);

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
