import * as React from 'react';
import * as PropTypes from 'prop-types';
import { theme } from 'styled-tools';
// @ts-ignore
import ConditionalWrap from 'conditional-wrap';
import { BoxProps as ReakitBoxProps } from '@jmoxey/reakit/ts/Box/Box';

import styled, { css } from '../styled';
import { InlineBlock } from '../primitives';
import TableBody, { TableBodyProps } from './TableBody';
import TableCaption, { TableCaptionProps } from './TableCaption';
import TableCell, { TableCellProps } from './TableCell';
import TableFoot, { TableFootProps } from './TableFoot';
import TableHead, { TableHeadProps } from './TableHead';
import TableHeadCell, { TableHeadCellProps } from './TableHeadCell';
import TableRow, { TableRowProps } from './TableRow';
import _Table from './styled';

const OuterBorder = styled(InlineBlock)<{ isFullWidth?: boolean }>`
  border: 1px solid ${theme('fannypack.Table.borderColor')};
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
  ${props =>
    props.isFullWidth &&
    css`
      width: 100%;
    `};
`;

export type LocalTableProps = {
  /** Title of the table to be read by screen readers. */
  a11yTitle?: string;
  children: React.ReactNode;
  /** Renders an outer border for the table */
  hasBorder?: boolean;
  isFullWidth?: boolean;
  isHoverable?: boolean;
  isStriped?: boolean;
};
export type TableProps = ReakitBoxProps & LocalTableProps;
export type TableComponents = {
  Body: React.FunctionComponent<TableBodyProps>;
  Caption: React.FunctionComponent<TableCaptionProps>;
  Cell: React.FunctionComponent<TableCellProps>;
  Foot: React.FunctionComponent<TableFootProps>;
  Head: React.FunctionComponent<TableHeadProps>;
  HeadCell: React.FunctionComponent<TableHeadCellProps>;
  Row: React.FunctionComponent<TableRowProps>;
};

export const Table: React.FunctionComponent<LocalTableProps> & TableComponents = ({
  a11yTitle,
  children,
  hasBorder,
  isFullWidth,
  ...props
}) => (
  <ConditionalWrap
    condition={hasBorder}
    wrap={(children: React.ReactNode) => <OuterBorder isFullWidth={isFullWidth}>{children}</OuterBorder>}
  >
    <_Table use="table" aria-label={a11yTitle} isFullWidth={isFullWidth} {...props}>
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

Table.propTypes = {
  a11yTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  hasBorder: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isHoverable: PropTypes.bool,
  isStriped: PropTypes.bool
};
Table.defaultProps = {
  a11yTitle: undefined,
  hasBorder: false,
  isFullWidth: false,
  isHoverable: false,
  isStriped: false
};

const C: React.FunctionComponent<TableProps> & TableComponents = Table;
export default C;
