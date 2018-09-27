// @flow
import React, { type Node } from 'react';
import { withTheme } from 'styled-components';
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import _Button from 'reakit/Button';
import _get from 'lodash/get';

import { type Palette, type Size } from '../types';
import Spinner from '../Spinner';

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
  type?: 'default' | 'outlined' | 'link'
};

export const Button = ({ children, className, disabled, isLoading, palette, size, type, ...props }: Props) => {
  const themePalette = _get(props, 'theme.palette');
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
          <Spinner
            color={
              type === 'default' ? themePalette[`${palette || ''}Inverted`](props) : themePalette[`${palette || ''}`]
            }
          />
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

export const ThemedButton = withTheme(Button);
