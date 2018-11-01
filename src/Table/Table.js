// @flow
import React, { type Node } from 'react';
import { theme } from 'styled-tools';
import ConditionalWrap from 'conditional-wrap';

import styled from '../styled';
import { InlineBlock } from '../primitives';
import TableBody from './TableBody';
import TableCaption from './TableCaption';
import TableCell from './TableCell';
import TableFoot from './TableFoot';
import TableHead from './TableHead';
import TableHeadCell from './TableHeadCell';
import TableRow from './TableRow';
import _Table from './styled';

const OuterBorder = styled(InlineBlock)`
  border: 1px solid ${theme('fannypack.Table.borderColor')};
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
`;

type Props = {
  /** Title of the table to be read by screen readers. */
  a11yTitle?: string,
  as?: any,
  children: Node,
  className?: string,
  /** Renders an outer border for the table */
  hasBorder?: boolean
};

const Table = ({ a11yTitle, as, children, className, hasBorder, ...props }: Props) => (
  <ConditionalWrap condition={hasBorder} wrap={children => <OuterBorder>{children}</OuterBorder>}>
    <_Table as={as} aria-label={a11yTitle} {...props}>
      {children}
    </_Table>
  </ConditionalWrap>
);

Table.Body = TableBody;
Table.Caption = TableCaption;
Table.Cell = TableCell;
Table.Foot = TableFoot;
Table.Head = TableHead;
Table.HeadCell = TableHeadCell;
Table.Row = TableRow;

Table.defaultProps = {
  a11yTitle: null,
  as: 'table',
  className: null,
  hasBorder: false
};

export default Table;
