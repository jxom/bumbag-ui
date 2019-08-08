import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { BoxProps, useBoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineFlexProps = {};
export type InlineFlexProps = BoxProps & LocalInlineFlexProps;

InlineFlex.defaultProps = {};

export function useInlineFlexProps(props: Partial<InlineFlexProps> = {}) {
  const boxProps = useBoxProps(props);

  const className = utils.useClassName({
    style: styles.InlineFlex,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export function InlineFlex(props: InlineFlexProps) {
  const { use, children, ...restProps } = props;
  const flexProps = useInlineFlexProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={flexProps}>
      {children}
    </utils.Element>
  );
}
