import * as React from 'react';
import { useTheme } from './useTheme';

export function useLocalStorage() {
  const { theme } = useTheme();

  const isEnabled = theme.modes?.enableLocalStorage;

  const get = React.useCallback(
    (key: string) => {
      if (!isEnabled) return;
      if (typeof window !== 'undefined') {
        return window.localStorage.getItem(`${theme.modes.localStoragePrefix}.${key}`);
      }
    },
    [isEnabled, theme.modes.localStoragePrefix]
  );

  const set = React.useCallback(
    (key: string, value: any) => {
      if (!isEnabled) return;
      if (typeof window !== 'undefined') {
        return window.localStorage.setItem(`${theme.modes.localStoragePrefix}.${key}`, value);
      }
    },
    [isEnabled, theme.modes.localStoragePrefix]
  );

  return { get, set };
}
