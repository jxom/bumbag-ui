// @flow
import React from 'react';

import _Columns from './styled';

type Props = {
  children: Node,
  className?: string
};

const Columns = ({ children, className, ...props }: Props) => (
  <_Columns className={className} {...props}>
    {children}
  </_Columns>
);

Columns.defaultProps = {
  className: null
};

export default Columns;
