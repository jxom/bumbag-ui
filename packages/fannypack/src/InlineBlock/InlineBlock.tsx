import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { BoxProps, useBoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineBlockProps = {};
export type InlineBlockProps = BoxProps & LocalInlineBlockProps;

InlineBlock.defaultProps = {};

export function useInlineBlockProps(props: Partial<InlineBlockProps> = {}) {
  const boxProps = useBoxProps(props);

  const className = utils.useClassName({
    style: styles.InlineBlock,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export function InlineBlock(props: InlineBlockProps) {
  const { use, children, ...restProps } = props;
  const blockProps = useInlineBlockProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={blockProps}>
      {children}
    </utils.Element>
  );
}
