import * as React from 'react';
import { ScrollViewProps } from 'react-native';
import { BottomSheetScrollView as _BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { createComponent, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

export type LocalBottomSheetScrollViewProps = {};
export type BottomSheetScrollViewProps = BoxProps & ScrollViewProps & LocalBottomSheetScrollViewProps;

const useProps = createHook<BottomSheetScrollViewProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
    };
  },
  { themeKey: 'native.BottomSheet.ScrollView' }
);

export const BottomSheetScrollView = createComponent<BottomSheetScrollViewProps>(
  (props) => {
    const htmlProps = useProps(props);

    return <_BottomSheetScrollView {...htmlProps} />;
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheet.ScrollView',
    },
    themeKey: 'native.BottomSheet.ScrollView',
  }
);
