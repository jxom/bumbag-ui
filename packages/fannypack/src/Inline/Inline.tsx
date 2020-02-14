import { Box as ReakitBox } from 'reakit';

import { InlineThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineProps = {
  overrides?: InlineThemeConfig;
};
export type InlineProps = BoxProps & LocalInlineProps;

const useProps = createHook<InlineProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Inline,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Inline' }
);

export const Inline = createComponent<InlineProps>(
  props => {
    const inlineProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: inlineProps });
  },
  {
    attach: { useProps },
    themeKey: 'Inline'
  }
);
