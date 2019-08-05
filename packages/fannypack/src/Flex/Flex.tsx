import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { BoxProps, useBoxProps } from '../Box';

import * as styles from './styles';

export type LocalFlexProps = {};
export type FlexProps = BoxProps & LocalFlexProps;

Flex.defaultProps = {};

export function useFlexProps(props: Partial<FlexProps> = {}) {
  const boxProps = useBoxProps(props);

  const className = utils.useClassName({
    style: styles.Flex,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export function Flex(props: FlexProps) {
  const { use, children, ...restProps } = props;
  const flexProps = useFlexProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={flexProps}>
      {children}
    </utils.Element>
  );
}
