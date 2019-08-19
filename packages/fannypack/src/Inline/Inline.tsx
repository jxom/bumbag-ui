import { Box as ReakitBox } from 'reakit';

import { InlineThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineProps = {
  overrides?: InlineThemeConfig;
};
export type InlineProps = BoxProps & LocalInlineProps;

function useProps(props: Partial<InlineProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Inline,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Inline = createComponent<InlineProps>(
  props => {
    const { children, use, ...restProps } = props;
    const inlineProps = useProps(restProps);
    return createElement({ children, component: ReakitBox, use, htmlProps: inlineProps });
  },
  {
    attach: { useProps },
    themeKey: 'Inline'
  }
);
