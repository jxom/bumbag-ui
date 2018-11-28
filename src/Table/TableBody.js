// @flow
import React, { type Node } from 'react';

import { TableBody as _TableBody } from './styled';

type Props = {
  use?: any,
  children: Node,
  /** Renders a border between rows */
  hasBorders?: boolean
};

const TableBody = ({ children, hasBorders, use, ...props }: Props) => (
  <_TableBody use={use} hasBorders={hasBorders} {...props}>
    {children}
  </_TableBody>
);

TableBody.defaultProps = {
  use: 'tbody',
  hasBorders: false
};

export default TableBody;
