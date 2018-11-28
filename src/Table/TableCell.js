// @flow
import React, { type Node } from 'react';

import { TableCell as _TableCell } from './styled';

type Props = {
  use?: any,
  children: Node
};

const TableCell = ({ children, ...props }: Props) => <_TableCell {...props}>{children}</_TableCell>;

TableCell.defaultProps = {
  use: 'td'
};

export default TableCell;
