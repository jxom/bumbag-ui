// @flow
import React, { type Node } from 'react';

import { TableBody as _TableBody } from './styled';

type Props = {
  as?: any,
  children: Node,
  /** Renders a border between rows */
  hasBorders?: boolean
};

const TableBody = ({ as, children, hasBorders, ...props }: Props) => (
  <_TableBody as={as} hasBorders={hasBorders} {...props}>
    {children}
  </_TableBody>
);

TableBody.defaultProps = {
  as: 'tbody',
  hasBorders: false
};

export default TableBody;
