import * as React from 'react';
import _BottomSheet, { BottomSheetProps as RNBottomSheetProps } from '@gorhom/bottom-sheet';
import { createComponent, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

export type LocalBottomSheetProps = {};
export type BottomSheetProps = BoxProps & RNBottomSheetProps & LocalBottomSheetProps;

const useProps = createHook<BottomSheetProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
    };
  },
  { defaultProps: { snapPoints: ['25%', '50%'] }, themeKey: 'native.BottomSheet' }
);

export const BottomSheet = createComponent<BottomSheetProps>(
  (props) => {
    const htmlProps = useProps(props);

    return <_BottomSheet {...htmlProps} />;
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheet',
    },
    themeKey: 'native.BottomSheet',
  }
);
