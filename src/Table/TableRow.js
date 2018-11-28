// @flow
import React, { type Node } from 'react';

import { TableRow as _TableRow } from './styled';

type Props = {
  use?: any,
  children: Node
};

const TableRow = ({ children, ...props }: Props) => <_TableRow {...props}>{children}</_TableRow>;

TableRow.defaultProps = {
  use: 'tr'
};

export default TableRow;
