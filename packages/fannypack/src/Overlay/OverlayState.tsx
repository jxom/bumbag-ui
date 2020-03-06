import React from 'react';
import { ModalInitialState, ModalStateReturn, useModalState, ModalState } from '../Modal';

export function useOverlayState(initialState?: ModalInitialState) {
  return useModalState({ ...initialState, modal: false });
}

export function OverlayState(
  props: {
    children?: React.ReactNode | ((state: ModalStateReturn) => React.ReactElement<any>);
  } & ModalInitialState
) {
  const { children, ...restProps } = props;
  return (
    <ModalState {...restProps} modal={false}>
      {children}
    </ModalState>
  );
}
