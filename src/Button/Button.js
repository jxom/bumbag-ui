import React from 'react';
import PropTypes from 'prop-types';
import * as sharedPropTypes from '../prop-types';

import { Button as StyledButton } from './styled';

const Button = ({ children, color }) => <StyledButton color={color}>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  /** Color of the button. Available values: "default", "primary", "secondary", "success", "warning", "danger" */
  color: sharedPropTypes.color
};

Button.defaultProps = {
  color: 'default'
};

Button.propertyControls = {
  children: { type: 'string', title: 'Text' },
  color: { type: 'enum', options: ['default', 'primary', 'success', 'danger'], title: 'Color' }
};

export default Button;
