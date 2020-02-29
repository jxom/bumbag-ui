import {
  useRoverState as useReakitRoverState,
  RoverStateReturn as ReakitRoverStateReturn,
  RoverInitialState as ReakitRoverInitialState
} from 'reakit';

export type RoverStateReturn = ReakitRoverStateReturn;
export type RoverInitialState = ReakitRoverInitialState;

export function useRoverState(initialState?: RoverInitialState) {
  return useReakitRoverState(initialState);
}

export function RoverState(
  props: {
    children?: (state: RoverStateReturn) => React.ReactElement<any>;
  } & RoverInitialState
) {
  const { children, ...restProps } = props;
  const state = useRoverState(restProps);
  return props.children(state);
}
