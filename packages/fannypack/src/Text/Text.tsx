import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalTextProps = {};
export type TextProps = BoxProps & LocalTextProps;

Text.defaultProps = {
  use: 'span'
};

function useProps(props: Partial<TextProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Text,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}
Text.useProps = useProps;

export function Text(props: TextProps) {
  const { use, children, ...restProps } = props;
  const htmlProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={htmlProps}>
      {children}
    </utils.Element>
  );
}
