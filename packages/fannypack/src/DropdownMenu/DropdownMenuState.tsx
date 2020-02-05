import * as React from 'react';
import {
  useMenuState as useReakitMenuState,
  MenuStateReturn as ReakitMenuStateReturn,
  MenuInitialState as ReakitMenuInitialState
} from 'reakit';

export type MenuStateReturn = ReakitMenuStateReturn;
export type MenuInitialState = ReakitMenuInitialState;

export function useDropdownMenuState(initialState: MenuInitialState) {
  return useReakitMenuState({ gutter: 8, ...initialState });
}

export function DropdownMenuState(
  props: { children?: (state: MenuInitialState) => React.ReactNode } & MenuInitialState
) {
  const { children, ...restProps } = props;
  const state = useDropdownMenuState(restProps);
  return props.children(state);
}
