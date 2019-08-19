import { Box as ReakitBox } from 'reakit';

import { BlockThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalBlockProps = {
  overrides?: BlockThemeConfig;
};
export type BlockProps = BoxProps & LocalBlockProps;

function useProps(props: Partial<BlockProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Block,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Block = createComponent<BlockProps>(
  props => {
    const { children, use, ...restProps } = props;
    const blockProps = useProps(restProps);
    return createElement({ children, component: ReakitBox, use, htmlProps: blockProps });
  },
  {
    attach: { useProps },
    themeKey: 'Block'
  }
);
