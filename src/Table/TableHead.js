// @flow
import React, { type Node } from 'react';

import { TableHead as _TableHead } from './styled';

type Props = {
  use?: any,
  children: Node,
  /** Renders a bottom border on the header row */
  hasBorder?: boolean
};

const TableHead = ({ children, hasBorder, ...props }: Props) => (
  <_TableHead hasBorder={hasBorder} {...props}>
    {children}
  </_TableHead>
);

TableHead.defaultProps = {
  use: 'thead',
  hasBorder: true
};

export default TableHead;
