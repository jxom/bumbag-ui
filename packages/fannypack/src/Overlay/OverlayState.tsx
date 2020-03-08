import React from 'react';
import { ModalInitialState, ModalStateReturn, useModalState, ModalState } from '../Modal';

export type OverlayStateReturn = ModalStateReturn;
export type OverlayInitialState = ModalInitialState;

export function useOverlayState(initialState?: OverlayInitialState) {
  return useModalState({ ...initialState, modal: false });
}

export function OverlayState(
  props: {
    children?: React.ReactNode | ((state: OverlayStateReturn) => React.ReactElement<any>);
  } & OverlayInitialState
) {
  const { children, ...restProps } = props;
  return (
    <ModalState {...restProps} modal={false}>
      {children}
    </ModalState>
  );
}
