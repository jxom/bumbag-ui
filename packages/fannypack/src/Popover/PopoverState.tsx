import {
  usePopoverState as useReakitPopoverState,
  PopoverStateReturn as ReakitPopoverStateReturn,
  PopoverInitialState as ReakitPopoverInitialState
} from 'reakit';

export type PopoverStateReturn = ReakitPopoverStateReturn;
export type PopoverInitialState = ReakitPopoverInitialState;

export function usePopoverState(initialState?: PopoverInitialState) {
  return useReakitPopoverState(initialState);
}

export function PopoverState(
  props: {
    children?: (state: PopoverStateReturn) => React.ReactElement<any>;
  } & PopoverInitialState
) {
  const { children, ...restProps } = props;
  const state = usePopoverState(restProps);
  return props.children(state);
}
