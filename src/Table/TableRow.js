// @flow
import React, { type Node } from 'react';

import { TableRow as _TableRow } from './styled';

type Props = {
  as?: any,
  children: Node
};

const TableRow = ({ as, children, ...props }: Props) => (
  <_TableRow as={as} {...props}>
    {children}
  </_TableRow>
);

TableRow.defaultProps = {
  as: 'tr'
};

export default TableRow;
