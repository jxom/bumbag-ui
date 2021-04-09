import { VirtualizedListProps as RNVirtualizedListProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './List.styles';

export type LocalListVirtualizedProps = {};
export type ListVirtualizedProps = BoxProps & RNVirtualizedListProps<unknown> & LocalListVirtualizedProps;

const useProps = createHook<ListVirtualizedProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'native.List.Virtualized' }
);

export const ListVirtualized = createComponent<ListVirtualizedProps>(
  (props) => {
    const listProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledListVirtualized,
      htmlProps: listProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.List.Virtualized',
    },
    themeKey: 'native.List.Virtualized',
  }
);
