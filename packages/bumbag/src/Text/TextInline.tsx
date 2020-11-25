import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Text.styles';

export type LocalTextInlineProps = {};
export type TextInlineProps = BoxProps & LocalTextInlineProps;

const useProps = createHook<TextInlineProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.TextInline,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Text.Inline' }
);

export const TextInline = createComponent<TextInlineProps>(
  (props) => {
    const textInlineProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: textInlineProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Text.Inline',
    },
    defaultProps: {
      use: 'span',
    },
    themeKey: 'Text.Inline',
  }
);
