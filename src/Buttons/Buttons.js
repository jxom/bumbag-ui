import React from 'react';
import PropTypes from 'prop-types';

import _Buttons from './styled';

const Buttons = ({ children, className, isGrouped, ...props }) => (
  <_Buttons className={className} isGrouped={isGrouped} {...props}>
    {children}
  </_Buttons>
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
