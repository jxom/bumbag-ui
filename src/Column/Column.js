import React from 'react';
import PropTypes from 'prop-types';

import _Column from './styled';

const Column = ({ children, ...props }) => <_Column {...props}>{children}</_Column>;

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spread: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  spreadOffset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'left', 'both', 'right'])
};

Column.defaultProps = {
  className: null,
  spread: null,
  spreadOffset: null
};

export default Column;
