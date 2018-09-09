import React from 'react';
import PropTypes from 'prop-types';

import { Buttons as StyledButtons } from './styled';

const Buttons = ({ children, className, ...props }) => (
  <StyledButtons className={className} {...props}>
    {children}
  </StyledButtons>
);

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Buttons.defaultProps = {
  className: null
};

export default Buttons;
