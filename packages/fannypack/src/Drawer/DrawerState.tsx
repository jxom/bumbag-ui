import * as React from 'react';
import { ModalStateReturn, ModalInitialState, useModalState, ModalState } from '../Modal';

export type DrawerStateReturn = ModalStateReturn;
export type DrawerInitialState = ModalInitialState;

export function useDrawerState(initialState?: DrawerInitialState) {
  return useModalState(initialState);
}

export function DrawerState(
  props: {
    children?: React.ReactNode | ((state: DrawerStateReturn) => React.ReactElement<any>);
  } & DrawerInitialState
) {
  const { children, ...restProps } = props;
  return <ModalState {...restProps}>{children}</ModalState>;
}
