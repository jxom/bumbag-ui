// @flow
import React, { type Node } from 'react';

import { TableHead as _TableHead } from './styled';

type Props = {
  as?: any,
  children: Node,
  /** Renders a bottom border on the header row */
  hasBorder?: boolean
};

const TableHead = ({ as, children, hasBorder, ...props }: Props) => (
  <_TableHead as={as} hasBorder={hasBorder} {...props}>
    {children}
  </_TableHead>
);

TableHead.defaultProps = {
  as: 'thead',
  hasBorder: true
};

export default TableHead;
