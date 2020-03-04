import * as React from 'react';
import {
  useDisclosureState as useReakitDisclosureState,
  DisclosureStateReturn as ReakitDisclosureStateReturn,
  DisclosureInitialState as ReakitDisclosureInitialState
} from 'reakit';

export type DisclosureStateReturn = ReakitDisclosureStateReturn;
export type DisclosureInitialState = ReakitDisclosureInitialState;

export function useDisclosureState(initialState?: DisclosureInitialState) {
  return useReakitDisclosureState(initialState);
}

export function DisclosureState(
  props: { children?: (state: DisclosureStateReturn) => React.ReactElement<any> } & DisclosureInitialState
) {
  const { children, ...restProps } = props;
  const state = useDisclosureState(restProps);
  return props.children(state);
}
