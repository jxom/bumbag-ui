import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineFlexProps = {};
export type InlineFlexProps = BoxProps & LocalInlineFlexProps;

InlineFlex.defaultProps = {};

function useProps(props: Partial<InlineFlexProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.InlineFlex,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}
InlineFlex.useProps = useProps;

export function InlineFlex(props: InlineFlexProps) {
  const { use, children, ...restProps } = props;
  const htmlProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={htmlProps}>
      {children}
    </utils.Element>
  );
}
