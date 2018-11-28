// @flow
import React, { type Node } from 'react';

import { TableHeadCell as _TableHeadCell } from './styled';

type Props = {
  use?: any,
  children: Node
};

const TableHeadCell = ({ children, ...props }: Props) => <_TableHeadCell {...props}>{children}</_TableHeadCell>;

TableHeadCell.defaultProps = {
  use: 'th'
};

export default TableHeadCell;
