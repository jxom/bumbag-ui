import { ModalStateReturn, ModalInitialState, useModalState } from '../Modal';

export type OverlayStateReturn = ModalStateReturn;
export type OverlayInitialState = ModalInitialState;

export function useOverlayState(initialState?: OverlayInitialState) {
  return useModalState(initialState);
}

export function OverlayState(
  props: {
    children?: (state: OverlayStateReturn) => React.ReactElement<any>;
  } & OverlayInitialState
) {
  const { children, ...restProps } = props;
  const state = useOverlayState(restProps);
  return props.children(state);
}
