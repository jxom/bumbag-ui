// @flow
import React, { type Node } from 'react';

import { TableFoot as _TableFoot } from './styled';

type Props = {
  use?: any,
  children: Node,
  /** Renders a top border on the footer row */
  hasBorder?: boolean
};

const TableFoot = ({ children, hasBorder, ...props }: Props) => (
  <_TableFoot hasBorder={hasBorder} {...props}>
    {children}
  </_TableFoot>
);

TableFoot.defaultProps = {
  use: 'tfoot',
  hasBorder: true
};

export default TableFoot;
