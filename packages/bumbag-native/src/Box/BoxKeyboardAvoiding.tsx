import { KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from './Box';
import * as styles from './Box.styles';

export type LocalBoxKeyboardAvoidingProps = {};
export type BoxKeyboardAvoidingProps = BoxProps & RNKeyboardAvoidingViewProps & LocalBoxKeyboardAvoidingProps;

const useProps = createHook<BoxKeyboardAvoidingProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'Box.KeyboardAvoiding' }
);

export const BoxKeyboardAvoiding = createComponent<BoxKeyboardAvoidingProps>(
  (props) => {
    const boxProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledBoxKeyboardAvoiding,
      htmlProps: boxProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Box.KeyboardAvoiding',
    },
    themeKey: 'Box.KeyboardAvoiding',
  }
);
