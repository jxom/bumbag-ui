import * as React from 'react';
import { BottomSheetDraggableView as _BottomSheetDraggableView } from '@gorhom/bottom-sheet';
import { createComponent, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

export type LocalBottomSheetDraggableViewProps = {};
export type BottomSheetDraggableViewProps = BoxProps & LocalBottomSheetDraggableViewProps;

const useProps = createHook<BottomSheetDraggableViewProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
    };
  },
  { themeKey: 'native.BottomSheet.DraggableView' }
);

export const BottomSheetDraggableView = createComponent<BottomSheetDraggableViewProps>(
  (props) => {
    const htmlProps = useProps(props);

    return <_BottomSheetDraggableView {...htmlProps} />;
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheet.DraggableView',
    },
    themeKey: 'native.BottomSheet.DraggableView',
  }
);
