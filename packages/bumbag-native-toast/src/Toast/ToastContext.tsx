import * as React from 'react';

type TToastOptions = {
  title: string;
};

export const ToastContext = React.createContext<{
  add: ({ title }: TToastOptions) => void;
  danger: ({ title }: TToastOptions) => void;
  success: ({ title }: TToastOptions) => void;
  info: ({ title }: TToastOptions) => void;
  warning: ({ title }: TToastOptions) => void;
  mount: any;
}>({
  add: () => undefined,
  danger: () => undefined,
  success: () => undefined,
  info: () => undefined,
  warning: () => undefined,
  mount: [],
});

export type ToastProviderProps = {
  children: React.ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
  const queueRef = React.useRef([]);

  const mount = React.useCallback(({ add }) => {
    const toastId = queueRef.current.length;
    queueRef.current = [{ id: toastId, add }, ...queueRef.current];
    return () => {
      queueRef.current = queueRef.current.filter(({ id }) => id !== toastId);
    };
  }, []);

  //////////////////////////////////////////////////////////////////

  const add = React.useCallback(({ palette, ...opts }) => {
    const toast = queueRef.current[0];
    toast.add({ ...opts, palette });
  }, []);

  //////////////////////////////////////////////////////////////////

  const danger = React.useCallback(
    (opts) => {
      add({ ...opts, palette: 'danger' });
    },
    [add]
  );

  const success = React.useCallback(
    (opts) => {
      add({ ...opts, palette: 'success' });
    },
    [add]
  );

  const warning = React.useCallback(
    (opts) => {
      add({ ...opts, palette: 'warning' });
    },
    [add]
  );

  const info = React.useCallback(
    (opts) => {
      add({ ...opts, palette: 'info' });
    },
    [add]
  );

  //////////////////////////////////////////////////////////////////

  return (
    <ToastContext.Provider value={{ mount, add, danger, success, warning, info }}>{children}</ToastContext.Provider>
  );
}
