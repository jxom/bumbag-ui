import * as React from 'react';
import { FlatListProps } from 'react-native';
import { BottomSheetFlatList as _BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { createComponent, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

export type LocalBottomSheetFlatListProps = {};
export type BottomSheetFlatListProps = BoxProps & FlatListProps<any> & LocalBottomSheetFlatListProps;

const useProps = createHook<BottomSheetFlatListProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
    };
  },
  { themeKey: 'native.BottomSheet.FlatList' }
);

export const BottomSheetFlatList = createComponent<BottomSheetFlatListProps>(
  (props) => {
    const htmlProps = useProps(props);

    return <_BottomSheetFlatList {...htmlProps} />;
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheet.FlatList',
    },
    themeKey: 'native.BottomSheet.FlatList',
  }
);
