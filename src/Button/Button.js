import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reakit/Box';
import _get from 'lodash/get';

import { palette } from '../theme';
import Spinner from '../Spinner';
import { DefaultButton, LinkButton, OutlinedButton, SpinnerWrapper } from './styled';

const Button = ({ children, className, disabled, isLoading, size, state, type, ...props }) => {
  let StyledButton = DefaultButton;
  if (type === 'outlined') {
    StyledButton = OutlinedButton;
  }
  if (type === 'link') {
    StyledButton = LinkButton;
  }
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      isLink={type === 'link'}
      isLoading={isLoading}
      isOutlined={type === 'outlined'}
      palette={state}
      size={size}
      {...props}
    >
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner color={type === 'default' ? _get(palette, `${state}Inverted`) : palette[state]} />
        </SpinnerWrapper>
      ) : null}
      <Box>{children}</Box>
    </StyledButton>
  );
};

Button.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Makes the button disabled. The user is unable to interact with the button. */
  disabled: PropTypes.bool,
  /** Adds a loading indicator to the button. */
  isLoading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default', 'medium', 'large']),
  state: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning']),
  type: PropTypes.oneOf(['default', 'outlined', 'link'])
};

Button.defaultProps = {
  as: null,
  className: null,
  disabled: false,
  isLoading: false,
  size: 'default',
  state: 'default',
  type: 'default'
};

export default Button;
