import { Box as ReakitBox } from 'reakit';

import { InlineBlockThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './InlineBlock.styles';

export type LocalInlineBlockProps = {};
export type InlineBlockProps = BoxProps & LocalInlineBlockProps;

const useProps = createHook<InlineBlockProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.InlineBlock,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'InlineBlock' }
);

export const InlineBlock = createComponent<InlineBlockProps>(
  (props) => {
    const inlineBlockProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: inlineBlockProps,
    });
  },
  {
    attach: { useProps, displayName: 'InlineBlock' },
    themeKey: 'InlineBlock',
  }
);
