import { Box as ReakitBox } from 'reakit';

import { TextThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalTextProps = {
  overrides?: TextThemeConfig;
};
export type TextProps = BoxProps & LocalTextProps;

const useProps = createHook<TextProps>(
  (props, themeKey) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Text,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Text' }
);

export const Text = createComponent<TextProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'span'
    },
    themeKey: 'Text'
  }
);
