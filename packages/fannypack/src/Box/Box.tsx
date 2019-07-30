import * as React from 'react';
import { BoxProps as ReakitBoxProps } from 'reakit';

import styled, { theme } from '../styled';
import { BoxThemeConfig, CSSProperties } from '../types';
import * as utils from '../utils';


export type LocalBoxProps = {
  as?: any,
  children?: React.ReactNode | ((props: BoxProps) => React.ReactNode);
  overrides?: BoxThemeConfig;
};
export type BoxProps = ReakitBoxProps & CSSProperties & LocalBoxProps;

export function useBoxProps(props: BoxProps | void) {
  const { as = undefined, overrides = {}, ...restProps } = props || {};
  const style = utils.useStyle(restProps);
  const htmlProps = utils.pickHTMLProps(restProps);
  return { as: as || StyledBox, overrides, style, ...htmlProps };
}

export function Box(props: BoxProps) {
  const { children } = props;
  const { as, ...boxProps} = useBoxProps(props);
  if (utils.isFunction(children)) {
    return children({ as, ...boxProps });
  }
  return (
    <StyledBox
      as={as !== StyledBox ? as : undefined}
      {...boxProps}
    >
      {children}
    </StyledBox>
  )
}

export const StyledBox = styled.div<BoxProps>`
  margin: unset;
  padding: unset;
  border: unset;
  background: unset;
  font: unset;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;

  &:focus:not(:focus-visible) {
    outline: none;
  }

  & {
    ${theme('Box.base')};
  }
`;
