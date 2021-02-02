import * as React from 'react';
import {
  usePopoverState as useReakitPopoverState,
  PopoverStateReturn as ReakitPopoverStateReturn,
  PopoverInitialState as ReakitPopoverInitialState,
} from 'reakit';
import { isFunction } from '../utils';

export type PopoverStateReturn = ReakitPopoverStateReturn;
export type PopoverInitialState = ReakitPopoverInitialState;

export const PopoverStateContext = React.createContext({ popover: {} });

export function usePopoverState(initialState?: PopoverInitialState) {
  return useReakitPopoverState(initialState);
}

export function usePopoverContext() {
  return React.useContext(PopoverStateContext);
}

export function PopoverState(
  props: {
    children?: React.ReactNode | ((state: PopoverStateReturn) => React.ReactElement<any>);
  } & PopoverInitialState
) {
  const { children, ...restProps } = props;
  const popover = usePopoverState(restProps);
  const contextValue = React.useMemo(() => ({ popover }), [popover]);
  return (
    <PopoverStateContext.Provider value={contextValue}>
      {isFunction(props.children) ? props.children(popover) : props.children}
    </PopoverStateContext.Provider>
  );
}
