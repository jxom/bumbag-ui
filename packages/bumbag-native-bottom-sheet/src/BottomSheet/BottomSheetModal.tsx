import * as React from 'react';
import {
  BottomSheetModal as _BottomSheetModal,
  BottomSheetModalProps as RNBottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import { createComponent, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

export type LocalBottomSheetModalProps = {};
export type BottomSheetModalProps = BoxProps & RNBottomSheetModalProps & LocalBottomSheetModalProps;

const useProps = createHook<BottomSheetModalProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
    };
  },
  { defaultProps: { snapPoints: ['25%', '50%'] }, themeKey: 'native.BottomSheetModal' }
);

export const BottomSheetModal = createComponent<BottomSheetModalProps>(
  (props) => {
    const htmlProps = useProps(props);

    return <_BottomSheetModal index={1} {...htmlProps} />;
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheetModal',
    },
    themeKey: 'native.BottomSheetModal',
  }
);
