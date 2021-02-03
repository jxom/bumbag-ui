import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from './Box';
import * as styles from './Box.styles';

export type LocalBoxTouchableProps = {};
export type BoxTouchableProps = BoxProps & RNTouchableOpacityProps & LocalBoxTouchableProps;

const useProps = createHook<BoxTouchableProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'native.Box.Touchable' }
);

export const BoxTouchable = createComponent<BoxTouchableProps>(
  (props) => {
    const boxProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledBoxTouchable,
      htmlProps: boxProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Box.Touchable',
    },
    themeKey: 'native.Box.Touchable',
  }
);
