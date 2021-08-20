import * as React from 'react';

type TToastOptions = {
  title: string;
};

export const ToastContext = React.createContext<{
  create: ({ title }: TToastOptions) => void;
  danger: ({ title }: TToastOptions) => void;
  success: ({ title }: TToastOptions) => void;
  info: ({ title }: TToastOptions) => void;
  warning: ({ title }: TToastOptions) => void;
  mount: any;
}>({
  create: () => undefined,
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

  const mount = React.useCallback(({ create }) => {
    const toastId = queueRef.current.length;
    queueRef.current = [{ id: toastId, create }, ...queueRef.current];
    return () => {
      queueRef.current = queueRef.current.filter(({ id }) => id !== toastId);
    };
  }, []);

  //////////////////////////////////////////////////////////////////

  const create = React.useCallback(({ palette, ...opts }) => {
    const toast = queueRef.current[0];
    toast.create({ ...opts, palette });
  }, []);

  //////////////////////////////////////////////////////////////////

  const danger = React.useCallback(
    (opts) => {
      create({ ...opts, palette: 'danger' });
    },
    [create]
  );

  const success = React.useCallback(
    (opts) => {
      create({ ...opts, palette: 'success' });
    },
    [create]
  );

  const warning = React.useCallback(
    (opts) => {
      create({ ...opts, palette: 'warning' });
    },
    [create]
  );

  const info = React.useCallback(
    (opts) => {
      create({ ...opts, palette: 'info' });
    },
    [create]
  );

  //////////////////////////////////////////////////////////////////

  return (
    <ToastContext.Provider value={{ mount, create, danger, success, warning, info }}>{children}</ToastContext.Provider>
  );
}
