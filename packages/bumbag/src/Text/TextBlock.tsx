import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Text.styles';

export type LocalTextBlockProps = {};
export type TextBlockProps = BoxProps & LocalTextBlockProps;

const useProps = createHook<TextBlockProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.TextBlock,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Text.Block' }
);

export const TextBlock = createComponent<TextBlockProps>(
  (props) => {
    const textBlockProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textBlockProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Text.Block',
    },
    defaultProps: {
      use: 'span',
    },
    themeKey: 'Text.Block',
  }
);
