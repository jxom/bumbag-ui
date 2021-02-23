import { TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from './Box';
import * as styles from './Box.styles';

export type LocalBoxTouchableWithoutFeedbackProps = {};
export type BoxTouchableWithoutFeedbackProps = BoxProps &
  RNTouchableWithoutFeedbackProps &
  LocalBoxTouchableWithoutFeedbackProps;

const useProps = createHook<BoxTouchableWithoutFeedbackProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'native.Box.TouchableWithoutFeedback' }
);

export const BoxTouchableWithoutFeedback = createComponent<BoxTouchableWithoutFeedbackProps>(
  (props) => {
    const boxProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledBoxTouchableWithoutFeedback,
      htmlProps: boxProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Box.TouchableWithoutFeedback',
    },
    themeKey: 'native.Box.TouchableWithoutFeedback',
  }
);
