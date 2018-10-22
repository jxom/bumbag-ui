// @flow
import React, { type Node } from 'react';

import { TableHeadCell as _TableHeadCell } from './styled';

type Props = {
  as?: any,
  children: Node,
  className?: string
};

const TableHeadCell = ({ as, children, className, ...props }: Props) => (
  <_TableHeadCell as={as} {...props}>
    {children}
  </_TableHeadCell>
);

TableHeadCell.defaultProps = {
  as: 'th',
  className: null
};

export default TableHeadCell;
