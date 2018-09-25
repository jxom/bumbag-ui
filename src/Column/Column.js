import React from 'react';
import PropTypes from 'prop-types';

import _Column from './styled';

const Column = ({ children, ...props }) => <_Column {...props}>{children}</_Column>;

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  offsetSpread: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'left', 'both', 'right']),
  spread: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};

Column.defaultProps = {
  className: null,
  offsetSpread: null,
  spread: null
};

export default Column;
