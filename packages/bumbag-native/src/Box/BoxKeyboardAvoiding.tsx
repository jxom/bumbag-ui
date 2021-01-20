import { KeyboardAvoidingViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from './Box';
import * as styles from './Box.styles';

export type LocalBoxKeyboardAvoidingProps = {};
export type BoxKeyboardAvoidingProps = BoxProps & KeyboardAvoidingViewProps & LocalBoxKeyboardAvoidingProps;

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
      use: props.use,
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
