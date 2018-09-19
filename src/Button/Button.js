import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reakit/Box';

import theme from '../theme/index';
import Loader from '../Loader';
import { DefaultButton, LinkButton, OutlinedButton, LoaderWrapper } from './styled';

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
      size={size}
      state={state}
      {...props}
    >
      {isLoading ? (
        <LoaderWrapper>
          <Loader color={type === 'default' ? theme.colorsInverted[state] : theme.colors[state]} />
        </LoaderWrapper>
      ) : null}
      <Box>{children}</Box>
    </StyledButton>
  );
};

Button.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Is the button disabled? */
  disabled: PropTypes.bool,
  /** Adds a loading indicator to the button. */
  isLoading: PropTypes.bool,
  /** Size of the button. */
  size: PropTypes.oneOf(['small', 'default', 'medium', 'large']),
  /** State of the button. */
  state: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning']),
  /** Type of button. */
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
