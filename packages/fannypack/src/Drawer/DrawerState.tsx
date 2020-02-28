import * as React from 'react';
import { ModalStateReturn, ModalInitialState, useModalState } from '../Modal';

export type DrawerStateReturn = ModalStateReturn;
export type DrawerInitialState = ModalInitialState;

export function useDrawerState(initialState?: DrawerInitialState) {
  return useModalState(initialState);
}

export function DrawerState(
  props: { children?: (state: DrawerStateReturn) => React.ReactElement<any> } & DrawerInitialState
) {
  const { children, ...restProps } = props;
  const state = useModalState(restProps);
  return props.children(state);
}
