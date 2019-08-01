import * as React from 'react';
import { Box as ReakitBox, BoxProps as ReakitBoxProps } from 'reakit';
import isPropValid from '@emotion/is-prop-valid';

import styled, { theme } from '../styled';
import { BoxThemeConfig, CSSProperties } from '../types';
import * as utils from '../utils';

export type LocalBoxProps = {
  use?: string | React.ComponentType<any>;
  children?: React.ReactNode | ((props: BoxProps) => React.ReactNode);
  /* Component-level theme overrides [Read more](TODO) */
  overrides?: BoxThemeConfig;
};
export type BoxProps = ReakitBoxProps & CSSProperties & LocalBoxProps;

export function useBoxProps(props: BoxProps | void) {
  const { use = undefined, ...restProps } = props || {};

  // Convert CSS props to a "style" prop & remove CSS props from DOM element.
  // Example input:
  // restProps = { color: 'red', backgroundColor: 'blue', isEnabled: true }
  //
  // Example output:
  // style = { color: 'red', backgroundColor: 'blue' }
  const style = utils.useStyle(restProps);

  return { use: use || StyledBox, style, ...restProps };
}

export function Box(props: BoxProps) {
  const { children, ...restProps } = props;
  const boxProps = useBoxProps(restProps);
  if (utils.isFunction(children)) {
    return <React.Fragment>{children(boxProps)}</React.Fragment>;
  }
  return (
    <StyledBox {...boxProps} as={boxProps.use !== StyledBox ? boxProps.use : undefined}>
      {children}
    </StyledBox>
  );
}

export const StyledBox = styled(ReakitBox, {
  shouldForwardProp: prop => isPropValid(prop) && !utils.isCSSProp(prop) && prop !== 'style'
})<BoxProps>`
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

  && {
    ${(props: any) => props && props.style};
  }
`;
