import * as React from 'react';
import {
  useDisclosureState as useReakitDisclosureState,
  DisclosureStateReturn as ReakitDisclosureStateReturn,
  DisclosureInitialState as ReakitDisclosureInitialState,
} from 'reakit';
import { isFunction } from '../utils';

export type DisclosureStateReturn = ReakitDisclosureStateReturn;
export type DisclosureInitialState = ReakitDisclosureInitialState;

export const DisclosureContext = React.createContext({ disclosure: {} });

export function useDisclosureState(initialState?: DisclosureInitialState) {
  return useReakitDisclosureState(initialState);
}

export function useDisclosureContext() {
  return React.useContext(DisclosureContext);
}

export function DisclosureState(
  props: {
    children?: React.ReactNode | ((state: DisclosureStateReturn) => React.ReactElement<any>);
  } & DisclosureInitialState
) {
  const { children, ...restProps } = props;
  const disclosure = useDisclosureState(restProps);
  const contextValue = React.useMemo(() => ({ disclosure }), [disclosure]);
  return (
    <DisclosureContext.Provider value={contextValue}>
      {isFunction(props.children) ? props.children(disclosure) : props.children}
    </DisclosureContext.Provider>
  );
}
