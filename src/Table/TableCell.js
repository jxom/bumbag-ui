// @flow
import React, { type Node } from 'react';

import { TableCell as _TableCell } from './styled';

type Props = {
  as?: any,
  children: Node
};

const TableCell = ({ as, children, ...props }: Props) => (
  <_TableCell as={as} {...props}>
    {children}
  </_TableCell>
);

TableCell.defaultProps = {
  as: 'td'
};

export default TableCell;
