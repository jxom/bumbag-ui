import * as React from 'react';

export type IdProviderProps = {
  children: React.ReactNode;
  prefix?: string;
};

const defaultPrefix = 'id-';

const generateId = (prefix = defaultPrefix) =>
  `${prefix}${Math.random()
    .toString(32)
    .substr(2, 6)}`;

const Context = React.createContext(generateId);

export function IdProvider({ children, prefix = '' }: IdProviderProps) {
  const count = React.useRef(0);
  const genId = React.useMemo(
    () => (localPrefix: string = defaultPrefix) =>
      `${prefix}${localPrefix}${process.env.NODE_ENV === 'test' ? '' : ++count.current}`,
    [prefix]
  );
  return <Context.Provider value={genId}>{children}</Context.Provider>;
}

export function useUniqueId(prefix = defaultPrefix) {
  const genId = React.useContext(Context);
  const [id] = React.useState(() => genId(prefix));
  return id;
}
