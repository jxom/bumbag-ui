import * as React from 'react';
import { Box as ReakitBox, BoxProps as ReakitBoxProps } from 'reakit';

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

  // Since we now have a "style" prop, let's omit CSS props from the DOM element.
  const newProps = utils.omitCSSProps(restProps);

  return { use: use || StyledBox, style, ...utils.omitCSSProps(newProps) };
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

// TODO: Migrate to emotion, use shouldForwardProps
export const StyledBox = styled(ReakitBox)<BoxProps>`
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
