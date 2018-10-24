// @flow
import React, { type Node } from 'react';
import styled from 'reakit/styled';
import Box from 'reakit/Box';

import type { ButtonType, Palette, Size } from '../types';
import Spinner from '../Spinner';
import _Button from './styled';

export const SpinnerWrapper = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & + span {
    opacity: 0;
  }
`;

type Props = {
  as?: any,
  children: Node,
  className?: string,
  /** Makes the button disabled. The user is unable to interact with the button. */
  disabled?: boolean,
  /** Adds a loading indicator to the button. */
  isLoading?: boolean,
  palette?: Palette,
  size?: Size,
  type?: ButtonType
};

export const Button = ({ children, className, disabled, isLoading, palette, size, type, ...props }: Props) => {
  return (
    <_Button
      className={className}
      disabled={disabled}
      isLoading={isLoading}
      palette={palette}
      size={size}
      type={type}
      {...props}
    >
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner color={type === 'default' ? `${palette || ''}Inverted` : palette} />
        </SpinnerWrapper>
      ) : null}
      <span>{children}</span>
    </_Button>
  );
};

Button.defaultProps = {
  as: null,
  className: null,
  disabled: false,
  isLoading: false,
  palette: 'default',
  size: 'default',
  type: 'default'
};

export default Button;
