import * as React from 'react';
import {
  useDialogState,
  DialogStateReturn as ReakitDialogStateReturn,
  DialogInitialState as ReakitDialogInitialState,
} from 'reakit';
import { isFunction } from '../utils';

export type ModalStateReturn = ReakitDialogStateReturn;
export type ModalInitialState = ReakitDialogInitialState;

export const ModalContext = React.createContext({ modal: {} as ModalStateReturn });

export function useModalState(initialState?: ModalInitialState) {
  return useDialogState(initialState);
}

export function useModalContext() {
  return React.useContext(ModalContext);
}

export function ModalState(
  props: {
    children?: React.ReactNode | ((state: ModalStateReturn) => React.ReactElement<any>);
  } & ModalInitialState
) {
  const { children, ...restProps } = props;
  const modal = useModalState(restProps);
  const contextValue = React.useMemo(() => ({ modal }), [modal]);
  return (
    <ModalContext.Provider value={contextValue}>
      {isFunction(props.children) ? props.children(modal) : props.children}
    </ModalContext.Provider>
  );
}
