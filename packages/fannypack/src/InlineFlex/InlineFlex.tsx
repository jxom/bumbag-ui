import { Box as ReakitBox } from 'reakit';

import { InlineFlexThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineFlexProps = {
  overrides?: InlineFlexThemeConfig;
};
export type InlineFlexProps = BoxProps & LocalInlineFlexProps;

function useProps(props: Partial<InlineFlexProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.InlineFlex,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const InlineFlex = createComponent<InlineFlexProps>(
  props => {
    const { children, use, ...restProps } = props;
    const inlineFlexProps = useProps(restProps);
    return createElement({ children, component: ReakitBox, use, htmlProps: inlineFlexProps });
  },
  {
    assign: { useProps },
    themeKey: 'InlineFlex'
  }
);
