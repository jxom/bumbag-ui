import { TextProps as RNTextProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Text.styles';

export type LocalTextProps = {};
export type TextProps = BoxProps & LocalTextProps;

const useProps = createHook<TextProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'Text' }
);

export const Text = createComponent<RNTextProps & TextProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledText,
      htmlProps: textProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Text',
    },
    themeKey: 'Text',
  }
);
