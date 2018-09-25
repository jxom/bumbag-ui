import React from 'react';
import PropTypes from 'prop-types';

import _Column from './styled';

const Column = ({ children, className, ...props }) => (
  <_Column className={className} {...props}>
    {children}
  </_Column>
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Column.defaultProps = {
  className: null
};

export default Column;
