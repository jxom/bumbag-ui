import {
  useDialogState,
  DialogStateReturn as ReakitDialogStateReturn,
  DialogInitialState as ReakitDialogInitialState
} from 'reakit';

export type ModalStateReturn = ReakitDialogStateReturn;
export type ModalInitialState = ReakitDialogInitialState;

export function useModalState(initialState?: ModalInitialState) {
  return useDialogState(initialState);
}

export function ModalState(
  props: {
    children?: (state: ModalStateReturn) => React.ReactElement<any>;
  } & ModalInitialState
) {
  const { children, ...restProps } = props;
  const state = useModalState(restProps);
  return props.children(state);
}
