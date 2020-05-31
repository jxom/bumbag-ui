import * as React from 'react';
import {
  useTabState as useReakitTabState,
  TabStateReturn as ReakitTabStateReturn,
  TabInitialState as ReakitTabInitialState,
} from 'reakit';

export type TabStateReturn = ReakitTabStateReturn;
export type TabInitialState = ReakitTabInitialState;

export function useTabState(initialState?: ReakitTabInitialState) {
  return useReakitTabState(initialState);
}

export function TabState(props: { children?: (state: TabInitialState) => React.ReactElement<any> } & TabInitialState) {
  const { children, ...restProps } = props;
  const state = useTabState(restProps);
  return props.children(state);
}
