import React from 'react';
import PropTypes from 'prop-types';

import _Columns from './styled';

const Columns = ({ children, className, ...props }) => (
  <_Columns className={className} {...props}>
    {children}
  </_Columns>
);

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Columns.defaultProps = {
  className: null
};

export default Columns;
