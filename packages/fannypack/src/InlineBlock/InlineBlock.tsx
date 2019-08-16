import { Box as ReakitBox } from 'reakit';

import { InlineBlockThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineBlockProps = {
  overrides?: InlineBlockThemeConfig;
};
export type InlineBlockProps = BoxProps & LocalInlineBlockProps;

function useProps(props: Partial<InlineBlockProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.InlineBlock,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const InlineBlock = createComponent<InlineBlockProps>(
  props => {
    const { children, use, ...restProps } = props;
    const inlineBlockProps = useProps(restProps);
    return createElement({ children, component: ReakitBox, use, htmlProps: inlineBlockProps });
  },
  {
    useProps
  }
);
