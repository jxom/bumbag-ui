import * as React from 'react';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box';

import { pickCSSProps } from '../utils';
import StyledBox from './styled';

export type LocalBoxProps = {
  children: React.ReactNode | ((props: ReakitBoxProps) => React.ReactNode);
};
export type BoxProps = ReakitBoxProps & LocalBoxProps;

export function Box(props: BoxProps) {
  const { children, ...rest } = props;
  // TODO: finish this - decorate theme... useStyle()
  const cssProps = pickCSSProps(props);
  return (
    <StyledBox style={cssProps} {...rest}>
      {children}
    </StyledBox>
  );
}
