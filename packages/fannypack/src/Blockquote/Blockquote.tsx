import { Box as ReakitBox } from 'reakit';

import { BlockquoteThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalBlockquoteProps = {
  overrides?: BlockquoteThemeConfig;
};
export type BlockquoteProps = BoxProps & LocalBlockquoteProps;

function useProps(props: Partial<BlockquoteProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Blockquote,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Blockquote = createComponent<BlockquoteProps>(
  props => {
    const { children, use, ...restProps } = props;
    const blockquoteProps = useProps(restProps);
    return createElement({ children, component: ReakitBox, use, htmlProps: blockquoteProps });
  },
  { defaultProps: { use: 'blockquote' }, useProps }
);
