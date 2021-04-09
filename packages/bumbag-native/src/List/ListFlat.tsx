import { FlatListProps as RNFlatListProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './List.styles';

export type LocalListFlatProps = {};
export type ListFlatProps = BoxProps & RNFlatListProps<unknown> & LocalListFlatProps;

const useProps = createHook<ListFlatProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'native.List.Flat' }
);

export const ListFlat = createComponent<ListFlatProps>(
  (props) => {
    const listProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledListFlat,
      htmlProps: listProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.List.Flat',
    },
    themeKey: 'native.List.Flat',
  }
);
