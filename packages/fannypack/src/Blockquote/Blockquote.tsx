import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalBlockquoteProps = {};
export type BlockquoteProps = BoxProps & LocalBlockquoteProps;

function useProps(props: Partial<BlockquoteProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Blockquote,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Blockquote = utils.createComponent<BlockquoteProps>(
  props => {
    const { children, use, ...restProps } = props;
    const blockquoteProps = useProps(restProps);
    return utils.createElement({ children, component: ReakitBox, use, htmlProps: blockquoteProps });
  },
  { defaultProps: { use: 'blockquote' }, useProps }
);
