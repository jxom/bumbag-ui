// @flow
import React, { type Node } from 'react';
import { theme } from 'styled-tools';
import { css } from 'reakit/styled';
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
  ${props =>
    props.isFullWidth &&
    css`
      width: 100%;
    `};
`;

type Props = {
  /** Title of the table to be read by screen readers. */
  a11yTitle?: string,
  use?: any,
  children: Node,
  /** Renders an outer border for the table */
  hasBorder?: boolean,
  isFullWidth?: boolean
};

const Table = ({ a11yTitle, children, hasBorder, isFullWidth, use, ...props }: Props) => (
  <ConditionalWrap
    condition={hasBorder}
    wrap={children => <OuterBorder isFullWidth={isFullWidth}>{children}</OuterBorder>}
  >
    <_Table use={use} aria-label={a11yTitle} isFullWidth={isFullWidth} {...props}>
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
  a11yTitle: undefined,
  use: 'table',
  hasBorder: false,
  isFullWidth: false
};

export default Table;
