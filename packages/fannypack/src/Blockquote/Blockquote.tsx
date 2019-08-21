import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalBlockquoteProps = {};
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
    const blockquoteProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: blockquoteProps
    });
  },
  { attach: { defaultProps: { use: 'blockquote' }, useProps }, themeKey: 'Blockquote' }
);
