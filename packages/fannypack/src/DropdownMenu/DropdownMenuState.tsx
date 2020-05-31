import * as React from 'react';
import {
  useMenuState as useReakitMenuState,
  MenuStateReturn as ReakitMenuStateReturn,
  MenuInitialState as ReakitMenuInitialState,
} from 'reakit';

export type DropdownMenuStateReturn = ReakitMenuStateReturn;
export type DropdownMenuInitialState = ReakitMenuInitialState;

export function useDropdownMenuState(initialState?: DropdownMenuInitialState) {
  return useReakitMenuState({ gutter: 8, ...initialState });
}

export function DropdownMenuState(
  props?: { children?: (state: DropdownMenuStateReturn) => any } & DropdownMenuInitialState
) {
  const { children, ...restProps } = props;
  const state = useDropdownMenuState(restProps);
  return props.children(state);
}
