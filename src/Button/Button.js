import React from 'react';
import PropTypes from 'prop-types';
import * as sharedPropTypes from '../prop-types';

import { Button as StyledButton } from './styled';

const Button = ({ children, color, size, text }) => (
  <StyledButton color={color} size={size}>
    {text || children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  /** Color of the button. Available values: "default", "primary", "secondary", "success", "warning", "danger" */
  color: sharedPropTypes.color,
  /** Size of the button. Available values: "small", "default", "medium", "large" */
  size: sharedPropTypes.size,
  text: PropTypes.string
};

Button.defaultProps = {
  color: 'default',
  size: 'default',
  text: null
};

Button.propertyControls = {
  color: { type: 'enum', options: ['default', 'primary', 'success', 'danger'], title: 'Color' },
  size: { type: 'enum', options: ['small', 'default', 'medium', 'large'], title: 'Size' },
  text: { type: 'string', title: 'Text' }
};

export default Button;
