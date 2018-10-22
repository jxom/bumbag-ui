// @flow
import React, { type Node } from 'react';

import { TableFoot as _TableFoot } from './styled';

type Props = {
  as?: any,
  children: Node,
  className?: string,
  /** Renders a top border on the footer row */
  hasBorder?: boolean
};

const TableFoot = ({ as, children, className, hasBorder, ...props }: Props) => (
  <_TableFoot as={as} hasBorder={hasBorder} {...props}>
    {children}
  </_TableFoot>
);

TableFoot.defaultProps = {
  as: 'tfoot',
  className: null,
  hasBorder: true
};

export default TableFoot;
