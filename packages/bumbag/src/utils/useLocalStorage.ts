import * as React from 'react';
import { useTheme } from './useTheme';

export function useLocalStorage() {
  const { theme } = useTheme();

  const isEnabled = theme.modes?.enableLocalStorage;
  const localStoragePrefix = theme.modes?.localStoragePrefix;

  const get = React.useCallback(
    (key: string) => {
      if (!isEnabled) return;
      if (typeof window !== 'undefined') {
        return window?.localStorage?.getItem?.(`${localStoragePrefix}.${key}`);
      }
    },
    [isEnabled, localStoragePrefix]
  );

  const set = React.useCallback(
    (key: string, value: any) => {
      if (!isEnabled) return;
      if (typeof window !== 'undefined') {
        return window?.localStorage?.setItem?.(`${localStoragePrefix}.${key}`, value);
      }
    },
    [isEnabled, localStoragePrefix]
  );

  return { get, set };
}
