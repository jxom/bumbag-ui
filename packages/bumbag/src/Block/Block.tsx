import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Block.styles';

export type LocalBlockProps = {};
export type BlockProps = BoxProps & LocalBlockProps;

const useProps = createHook<BlockProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Block,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Block' }
);

export const Block = createComponent<BlockProps>(
  (props) => {
    const blockProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: blockProps });
  },
  {
    attach: { useProps, displayName: 'Block' },
    themeKey: 'Block',
  }
);
