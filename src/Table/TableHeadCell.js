// @flow
import React, { type Node } from 'react';

import { TableHeadCell as _TableHeadCell } from './styled';

type Props = {
  as?: any,
  children: Node
};

const TableHeadCell = ({ as, children, ...props }: Props) => (
  <_TableHeadCell as={as} {...props}>
    {children}
  </_TableHeadCell>
);

TableHeadCell.defaultProps = {
  as: 'th'
};

export default TableHeadCell;
