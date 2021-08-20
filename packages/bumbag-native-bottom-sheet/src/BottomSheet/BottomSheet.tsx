import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import _BottomSheet from '@gorhom/bottom-sheet';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';
import { Text, TextProps } from 'bumbag-native/Text';

import * as styles from './BottomSheet.styles';

export type LocalBottomSheetProps = {};
export type BottomSheetProps = BoxProps & RNViewProps & LocalBottomSheetProps;

const useProps = createHook<BottomSheetProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
      children: (
        <_BottomSheet index={1} snapPoints={['25%', '50%']}>
          <Box>
            <Text>Awesome 🎉</Text>
          </Box>
        </_BottomSheet>
      ),
    };
  },
  { themeKey: 'native.BottomSheet' }
);

export const BottomSheet = createComponent<BottomSheetProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.BottomSheet,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheet',
    },
    themeKey: 'native.BottomSheet',
  }
);
