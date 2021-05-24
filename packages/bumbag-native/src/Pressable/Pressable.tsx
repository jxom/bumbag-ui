import { PressableProps as RNPressableProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { throttle } from '../utils';

import * as styles from './Pressable.styles';

export type LocalPressableProps = {
  throttle?: boolean | number;
};
export type PressableProps = BoxProps & RNPressableProps & LocalPressableProps;

const useProps = createHook<PressableProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps, onPress: throttle(props.onPress, props.throttle) };
  },
  { themeKey: 'native.Pressable' }
);

export const Pressable = createComponent<PressableProps>(
  (props) => {
    const boxProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledPressable,
      htmlProps: boxProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Pressable',
    },
    themeKey: 'native.Pressable',
  }
);
