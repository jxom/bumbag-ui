// @flow
import React, { type Node } from 'react';

import { TableCell as _TableCell } from './styled';

type Props = {
  as?: any,
  children: Node,
  className?: string
};

const TableCell = ({ as, children, className, ...props }: Props) => (
  <_TableCell as={as} {...props}>
    {children}
  </_TableCell>
);

TableCell.defaultProps = {
  as: 'td',
  className: null
};

export default TableCell;
