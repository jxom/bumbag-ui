import React from 'react';
import PropTypes from 'prop-types';
import * as sharedPropTypes from '../prop-types';

import { Button as StyledButton } from './styled';

const Button = ({ children, color, size }) => (
  <StyledButton color={color} size={size}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  /** Color of the button. Available values: "default", "primary", "secondary", "success", "warning", "danger" */
  color: sharedPropTypes.color,
  /** Size of the button. Available values: "small", "default", "medium", "large" */
  size: sharedPropTypes.size
};

Button.defaultProps = {
  color: 'default',
  size: 'default'
};

Button.propertyControls = {
  children: { type: 'string', title: 'Text' },
  color: { type: 'enum', options: ['default', 'primary', 'success', 'danger'], title: 'Color' },
  size: { type: 'enum', options: ['small', 'default', 'medium', 'large'], title: 'Size' }
};

export default Button;
