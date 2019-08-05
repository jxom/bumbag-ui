import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { BoxProps, useBoxProps } from '../Box';

import * as styles from './styles';

export type LocalBlockProps = {};
export type BlockProps = BoxProps & LocalBlockProps;

Block.defaultProps = {};

export function useBlockProps(props: Partial<BlockProps> = {}) {
  const boxProps = useBoxProps(props);

  const className = utils.useClassName({
    style: styles.Block,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export function Block(props: BlockProps) {
  const { use, children, ...restProps } = props;
  const blockProps = useBlockProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={blockProps}>
      {children}
    </utils.Element>
  );
}
