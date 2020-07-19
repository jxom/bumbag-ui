import * as React from 'react';

import { generateId, useTheme } from '../utils';

export const ToastContext = React.createContext({
  // @ts-ignore
  add: (toast: any) => {},
  // @ts-ignore
  success: (toast: any) => {},
  // @ts-ignore
  danger: (toast: any) => {},
  // @ts-ignore
  warning: (toast: any) => {},
  // @ts-ignore
  info: (toast: any) => {},
  toasts: [],
});

type Props = {
  children: React.ReactNode;
};

export function ToastProvider(props: Props) {
  const { children } = props;

  const { theme } = useTheme();
  const [toasts, setToasts] = React.useState([]);
  const placement = theme?.Toast?.placement;
  const showCountdown = theme?.Toast?.showCountdown;
  const timeout = theme?.Toast?.timeout;

  const remove = React.useCallback((key) => {
    setToasts((toasts) => {
      const newToasts = toasts.filter((toast) => toast.key !== key);
      return newToasts;
    });
  }, []);

  const add = React.useCallback(
    (_toast) => {
      const key = generateId('toast-');
      const toast = {
        showCountdown,
        timeout,
        ..._toast,
      };
      setToasts((toasts) => [
        ...(placement.includes('bottom') ? toasts : []),
        { key, ...toast, countdown: toast.showCountdown ? toast.timeout : undefined, onClickClose: () => remove(key) },
        ...(!placement.includes('bottom') ? toasts : []),
      ]);

      if (toast.timeout) {
        setTimeout(() => {
          setToasts((toasts) => {
            const newToasts = toasts.filter((toast) => toast.key !== key);
            return newToasts;
          });
        }, toast.timeout);
      }
    },
    [placement, remove, showCountdown, timeout]
  );

  const success = React.useCallback((toast) => add({ ...toast, type: 'success' }), [add]);
  const info = React.useCallback((toast) => add({ ...toast, type: 'info' }), [add]);
  const warning = React.useCallback((toast) => add({ ...toast, type: 'warning' }), [add]);
  const danger = React.useCallback((toast) => add({ ...toast, type: 'danger' }), [add]);

  const value = React.useMemo(
    () => ({
      add,
      success,
      info,
      warning,
      danger,
      toasts,
    }),
    [add, danger, info, success, toasts, warning]
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToasts() {
  return React.useContext(ToastContext);
}
