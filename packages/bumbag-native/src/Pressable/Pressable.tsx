import { PressableProps as RNPressableProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Pressable.styles';

export type LocalPressableProps = {};
export type PressableProps = BoxProps & RNPressableProps & LocalPressableProps;

const useProps = createHook<PressableProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
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
