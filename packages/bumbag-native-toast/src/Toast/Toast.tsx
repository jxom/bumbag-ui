import * as React from 'react';
import { TextInputProps as RNTextInputProps, ViewProps as RNViewProps, Text } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { useFontStyles, useTheme } from 'bumbag-native/utils';
import { Box, BoxProps } from 'bumbag-native/Box';
import Animated, { Easing, useAnimatedStyle, withTiming, useAnimatedProps } from 'react-native-reanimated';

import * as styles from './Toast.styles';

const AnimatedToast = Animated.createAnimatedComponent(styles.Toast);
const AnimatedTextInput = Animated.createAnimatedComponent(styles.ToastTextInput);

export type LocalToastProps = {
  placement: { value: 'top' | 'bottom' };
  title: { value: string };
  show: { value: boolean };
  palette: { value: string };
  textWrapperProps?: Partial<BoxProps>;
  textProps?: Partial<RNTextInputProps>;
};
export type ToastProps = BoxProps & RNViewProps & LocalToastProps;

const useProps = createHook<ToastProps>(
  (props) => {
    const { textWrapperProps, textProps: textInputProps = {}, title } = props;
    const boxProps = Box.useProps(props);

    //////////////////////////////////////////

    const fontStyles = useFontStyles({ fontWeight: props.fontWeight });

    const textProps = useAnimatedProps(() => {
      return {
        text: title.value,
      };
    });

    //////////////////////////////////////////////

    return {
      ...boxProps,
      children: (
        <styles.ToastTextWrapper paddingX="major-2" marginTop={{ ios: '-8px' }} {...textWrapperProps}>
          <AnimatedTextInput
            // @ts-ignore
            animatedProps={textProps}
            multiline
            editable={false}
            {...textInputProps}
            style={{ color: 'white', ...fontStyles, ...(textInputProps?.style as any) }}
          />
        </styles.ToastTextWrapper>
      ),
    };
  },
  { defaultProps: { fontWeight: '600' }, themeKey: 'native.Toast' }
);

export const Toast = createComponent<ToastProps>(
  (props) => {
    const { placement, palette, show } = props;
    const htmlProps = useProps(props);

    //////////////////////////////////////////

    const { theme } = useTheme();

    //////////////////////////////////////////

    const animatedStyle = useAnimatedStyle(() => {
      const animation = withTiming(show.value ? 0 : -100, {
        duration: 200,
        easing: Easing.inOut(Easing.exp),
      });
      return {
        backgroundColor: theme.palette[palette.value],
        ...(placement.value === 'top'
          ? {
              top: animation,
            }
          : {}),
        ...(placement.value === 'bottom'
          ? {
              bottom: animation,
            }
          : {}),
      };
    });

    return createElement({
      children: props.children,
      component: AnimatedToast,
      htmlProps: {
        ...htmlProps,
        style: animatedStyle,
      },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Toast',
    },
    themeKey: 'native.Toast',
  }
);
