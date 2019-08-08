import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineProps = {};
export type InlineProps = BoxProps & LocalInlineProps;

Inline.defaultProps = {};

function useProps(props: Partial<InlineProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Inline,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}
Inline.useProps = useProps;

export function Inline(props: InlineProps) {
  const { use, children, ...restProps } = props;
  const htmlProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={htmlProps}>
      {children}
    </utils.Element>
  );
}
