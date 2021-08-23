import * as React from 'react';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { Box, BoxProps, BoxTouchableProps } from 'bumbag-native/Box';
import Animated, { Extrapolate, useAnimatedStyle, interpolate } from 'react-native-reanimated';

import * as styles from './BottomSheet.styles';

export type LocalBottomSheetBackdropProps = {
  animatedIndex?: { value: number };
  onPress?: BoxTouchableProps['onPress'];
  containerStyle?: any;
};
export type BottomSheetBackdropProps = BoxProps & LocalBottomSheetBackdropProps;

const useProps = createHook<BottomSheetBackdropProps>(
  (props) => {
    const { animatedIndex, onPress, style } = props;
    const boxProps = Box.useProps(props);

    const containerAnimatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(animatedIndex.value, [0, 0.8], [0, 0.8], Extrapolate.CLAMP),
    }));

    const containerStyle = React.useMemo(
      () => [
        style,
        {
          backgroundColor: 'black',
          opacity: 0,
        },
        containerAnimatedStyle,
      ],
      [containerAnimatedStyle, style]
    );

    return {
      ...boxProps,
      children: <Box.Touchable onPress={onPress} height="100%" flex="1" />,
      containerStyle,
    };
  },
  { themeKey: 'native.BottomSheet.Backdrop' }
);

export const BottomSheetBackdrop = createComponent<BottomSheetBackdropProps>(
  (props) => {
    const htmlProps = useProps(props);

    return createElement({
      children: props.children,
      component: styles.BottomSheetBackdrop,
      htmlProps: {
        ...htmlProps,
        style: htmlProps.containerStyle,
      },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheet.Backdrop',
    },
    themeKey: 'native.BottomSheet.Backdrop',
  }
);
