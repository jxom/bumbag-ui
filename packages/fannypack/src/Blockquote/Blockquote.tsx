import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalBlockquoteProps = {};
export type BlockquoteProps = BoxProps & LocalBlockquoteProps;

Blockquote.defaultProps = {
  use: 'blockquote'
};

function useProps(props: Partial<BlockquoteProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Blockquote,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}
Blockquote.useProps = useProps;

export function Blockquote(props: BlockquoteProps) {
  const { use, children, ...restProps } = props;
  const htmlProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={htmlProps}>
      {children}
    </utils.Element>
  );
}
