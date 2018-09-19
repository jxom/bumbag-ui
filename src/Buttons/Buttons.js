import React from 'react';
import PropTypes from 'prop-types';

import { Buttons as StyledButtons } from './styled';

const Buttons = ({ children, className, isGrouped, ...props }) => (
  <StyledButtons className={className} isGrouped={isGrouped} {...props}>
    {children}
  </StyledButtons>
);

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isGrouped: PropTypes.bool
};

Buttons.defaultProps = {
  className: null,
  isGrouped: false
};

export default Buttons;
