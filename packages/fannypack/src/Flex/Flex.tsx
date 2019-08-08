import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalFlexProps = {};
export type FlexProps = BoxProps & LocalFlexProps;

Flex.defaultProps = {};

function useProps(props: Partial<FlexProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Flex,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}
Flex.useProps = useProps;

export function Flex(props: FlexProps) {
  const { use, children, ...restProps } = props;
  const flexProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={flexProps}>
      {children}
    </utils.Element>
  );
}
