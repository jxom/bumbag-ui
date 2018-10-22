// @flow
import React, { type Node } from 'react';

import { TableRow as _TableRow } from './styled';

type Props = {
  as?: any,
  children: Node,
  className?: string
};

const TableRow = ({ as, children, className, ...props }: Props) => (
  <_TableRow as={as} {...props}>
    {children}
  </_TableRow>
);

TableRow.defaultProps = {
  as: 'tr',
  className: null
};

export default TableRow;
