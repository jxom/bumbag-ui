import {
  useTooltipState as useReakitTooltipState,
  TooltipStateReturn as ReakitTooltipStateReturn,
  TooltipInitialState as ReakitTooltipInitialState,
} from 'reakit';

export type TooltipStateReturn = ReakitTooltipStateReturn;
export type TooltipInitialState = ReakitTooltipInitialState;

export function useTooltipState(initialState?: TooltipInitialState) {
  return useReakitTooltipState(initialState);
}

export function TooltipState(
  props: {
    children?: (state: TooltipStateReturn) => React.ReactElement<any>;
  } & TooltipInitialState
) {
  const { children, ...restProps } = props;
  const state = useTooltipState(restProps);
  return props.children(state);
}
