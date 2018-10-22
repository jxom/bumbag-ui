// @flow
import React, { type Node } from 'react';

import { TableHead as _TableHead } from './styled';

type Props = {
  as?: any,
  children: Node,
  className?: string,
  /** Renders a bottom border on the header row */
  hasBorder?: boolean
};

const TableHead = ({ as, children, className, hasBorder, ...props }: Props) => (
  <_TableHead as={as} hasBorder={hasBorder} {...props}>
    {children}
  </_TableHead>
);

TableHead.defaultProps = {
  as: 'thead',
  className: null,
  hasBorder: true
};

export default TableHead;
