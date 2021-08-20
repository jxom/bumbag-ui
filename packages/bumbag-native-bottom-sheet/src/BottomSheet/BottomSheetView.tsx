import * as React from 'react';
import { BottomSheetView as _BottomSheetView } from '@gorhom/bottom-sheet';
import { createComponent, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

export type LocalBottomSheetViewProps = {};
export type BottomSheetViewProps = BoxProps & LocalBottomSheetViewProps;

const useProps = createHook<BottomSheetViewProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
    };
  },
  { themeKey: 'native.BottomSheet.View' }
);

export const BottomSheetView = createComponent<BottomSheetViewProps>(
  (props) => {
    const htmlProps = useProps(props);

    return <_BottomSheetView {...htmlProps} />;
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheet.View',
    },
    themeKey: 'native.BottomSheet.View',
  }
);
