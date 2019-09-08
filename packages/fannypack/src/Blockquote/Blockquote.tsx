import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalBlockquoteProps = {};
export type BlockquoteProps = BoxProps & LocalBlockquoteProps;

const useProps = createHook<BlockquoteProps>(
  (props, themeKey) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Blockquote,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Blockquote' }
);

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
  { attach: { useProps }, defaultProps: { use: 'blockquote' }, themeKey: 'Blockquote' }
);
