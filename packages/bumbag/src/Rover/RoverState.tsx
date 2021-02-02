import * as React from 'react';
import {
  useRoverState as useReakitRoverState,
  RoverStateReturn as ReakitRoverStateReturn,
  RoverInitialState as ReakitRoverInitialState,
} from 'reakit';
import { isFunction } from '../utils';

export type RoverStateReturn = ReakitRoverStateReturn;
export type RoverInitialState = ReakitRoverInitialState;

export const RoverContext = React.createContext({ rover: {} });

export function useRoverState(initialState?: RoverInitialState) {
  return useReakitRoverState(initialState);
}

export function useRoverContext() {
  return React.useContext(RoverContext);
}

export function RoverState(
  props: {
    children?: React.ReactNode | ((state: RoverStateReturn) => React.ReactElement<any>);
  } & RoverInitialState
) {
  const { children, ...restProps } = props;
  const rover = useRoverState(restProps);
  const contextValue = React.useMemo(() => ({ rover }), [rover]);
  return (
    <RoverContext.Provider value={contextValue}>
      {isFunction(props.children) ? props.children(rover) : props.children}
    </RoverContext.Provider>
  );
}
