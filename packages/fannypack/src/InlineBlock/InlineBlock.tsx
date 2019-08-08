import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineBlockProps = {};
export type InlineBlockProps = BoxProps & LocalInlineBlockProps;

InlineBlock.defaultProps = {};

function useProps(props: Partial<InlineBlockProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.InlineBlock,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}
InlineBlock.useProps = useProps;

export function InlineBlock(props: InlineBlockProps) {
  const { use, children, ...restProps } = props;
  const htmlProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={htmlProps}>
      {children}
    </utils.Element>
  );
}
