import * as React from 'react';
import { Button as ReakitButton } from 'reakit';

import styled, { theme } from '../styled';
import * as utils from '../utils';
import { Box, BoxProps, useBoxProps } from '../Box';

export type LocalButtonProps = {};
export type ButtonProps = BoxProps & LocalButtonProps;

export function useButtonProps(props: ButtonProps | void) {
  const { use = undefined, ...restProps } = props || {};
  const boxProps = useBoxProps(restProps);
  return { ...boxProps, use: use || StyledButton };
}

export function Button(props: ButtonProps) {
  const { children, ...restProps } = props;
  const buttonProps = useButtonProps(restProps);
  if (utils.isFunction(children)) {
    return <React.Fragment>{children(buttonProps)}</React.Fragment>;
  }
  return (
    <StyledButton {...buttonProps} use={buttonProps.use !== StyledButton ? buttonProps.use : ReakitButton}>
      {children}
    </StyledButton>
  );
}

export const StyledButton = styled(Box)<ButtonProps>`
  & {
    ${theme('Button.base')};
  }
`;
