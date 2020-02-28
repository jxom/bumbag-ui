import * as React from 'react';
import {
  useHiddenState as useReakitHiddenState,
  HiddenStateReturn as ReakitHiddenStateReturn,
  HiddenInitialState as ReakitHiddenInitialState
} from 'reakit';

export type HiddenStateReturn = ReakitHiddenStateReturn;
export type HiddenInitialState = ReakitHiddenInitialState;

export function useHiddenState(initialState?: HiddenInitialState) {
  return useReakitHiddenState(initialState);
}

export function HiddenState(
  props: { children?: (state: HiddenStateReturn) => React.ReactElement<any> } & HiddenInitialState
) {
  const { children, ...restProps } = props;
  const state = useHiddenState(restProps);
  return props.children(state);
}
