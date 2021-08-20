import * as React from 'react';
import { BottomSheetBackdrop as _BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { createComponent, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

export type LocalBottomSheetBackdropProps = {};
export type BottomSheetBackdropProps = BoxProps & LocalBottomSheetBackdropProps;

const useProps = createHook<BottomSheetBackdropProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
    };
  },
  { themeKey: 'native.BottomSheet.Backdrop' }
);

export const BottomSheetBackdrop = createComponent<BottomSheetBackdropProps>(
  (props) => {
    const htmlProps = useProps(props);

    return <_BottomSheetBackdrop {...htmlProps} />;
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheet.Backdrop',
    },
    themeKey: 'native.BottomSheet.Backdrop',
  }
);
