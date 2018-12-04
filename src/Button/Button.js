// @flow
import React, { Fragment, type Node } from 'react';
import styled from 'reakit/styled';
import Box from 'reakit/Box';

import type { ButtonType, Palette, Size } from '../types';
import Spinner from '../Spinner';
import _Button from './styled';

const Text = styled.span`
  align-items: center;
  display: inline-flex;
`;
export const SpinnerWrapper = styled(Box)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  & + ${Text} {
    opacity: 0;
  }
`;

type Props = {
  use?: any,
  children: Node,
  className?: string,
  /** Makes the button disabled. The user is unable to interact with the button. */
  disabled?: boolean,
  /** Adds a loading indicator to the button. */
  isLoading?: boolean,
  /** Makes the button not interactable. */
  isStatic?: boolean,
  kind?: ButtonType,
  palette?: Palette,
  size?: Size
};

export const Button = ({
  children,
  className,
  disabled,
  isLoading,
  isStatic,
  kind,
  palette,
  size,
  ...props
}: Props) => {
  return (
    <_Button
      className={className}
      disabled={disabled}
      isLoading={isLoading}
      isStatic={isStatic}
      kind={kind}
      palette={palette}
      size={size}
      {...props}
    >
      {isLoading ? (
        <Fragment>
          <SpinnerWrapper>
            <Spinner color={kind === 'default' ? `${palette || ''}Inverted` : palette} />
          </SpinnerWrapper>
          <Text>{children}</Text>
        </Fragment>
      ) : (
        children
      )}
    </_Button>
  );
};

Button.defaultProps = {
  use: undefined,
  className: undefined,
  disabled: false,
  isLoading: false,
  isStatic: false,
  kind: 'default',
  palette: 'default',
  size: 'default'
};

export default Button;
