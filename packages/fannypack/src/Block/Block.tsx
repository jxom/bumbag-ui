import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalBlockProps = {};
export type BlockProps = BoxProps & LocalBlockProps;

function useProps(props: Partial<BlockProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Block,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Block = utils.createComponent<BlockProps>(
  props => {
    const { children, use, ...restProps } = props;
    const blockProps = useProps(restProps);
    return utils.createElement({ children, component: ReakitBox, use, htmlProps: blockProps });
  },
  {
    useProps
  }
);
