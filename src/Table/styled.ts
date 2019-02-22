import { theme } from 'styled-tools';

import styled, { css, space, s } from '../styled';
import { Box } from '../primitives';

import { LocalTableProps } from './Table';
import { LocalTableCaptionProps } from './TableCaption';
import { LocalTableCellProps } from './TableCell';
import { LocalTableFootProps } from './TableFoot';
import { LocalTableHeadProps } from './TableHead';
import { LocalTableHeadCellProps } from './TableHeadCell';
import { LocalTableRowProps } from './TableRow';
import { LocalTableBodyProps } from './TableBody';

export const Caption = styled(Box)<LocalTableCaptionProps>`
  caption-side: ${props => props.position};

  & {
    ${theme('fannypack.Table.Caption.base')};
  }
`;

export const TableCell = styled(Box)<LocalTableCellProps>`
  padding: ${theme('fannypack.Table.spacing')}rem;

  & {
    ${theme('fannypack.Table.Cell.base')};
  }
`;

export const TableFoot = styled(Box)<LocalTableFootProps>`
  font-weight: bold;

  & {
    ${props =>
      props.hasBorder &&
      css`
        border-top: 2px solid ${theme('fannypack.Table.borderColor')};
      `};
  }

  & {
    ${theme('fannypack.Table.Foot.base')};
  }
`;

export const TableHead = styled(Box)<LocalTableHeadProps>`
  border: unset;

  & {
    ${props =>
      props.hasBorder &&
      css`
        border-bottom: 2px solid ${theme('fannypack.Table.borderColor')};
      `};
  }

  & {
    ${theme('fannypack.Table.Head.base')};
  }
`;

export const TableHeadCell = styled(Box)<LocalTableHeadCellProps>`
  font-weight: bold;
  padding: ${theme('fannypack.Table.spacing')}rem;

  & {
    ${theme('fannypack.Table.HeadCell.base')};
  }
`;

export const TableRow = styled(Box)<LocalTableRowProps>`
  & {
    ${theme('fannypack.Table.Row.base')};
  }
`;

export const TableBody = styled(Box)<LocalTableBodyProps>`
  ${props =>
    props.hasBorders &&
    css`
      & ${s(TableRow)} {
        border-bottom: 1px solid ${theme('fannypack.Table.borderColor')};
      }
    `};

  & {
    ${theme('fannypack.Table.Body.base')};
  }
`;

const fullWidthProperties = css`
  width: 100%;
`;
const hoverableProperties = css`
  & ${s(TableBody)} ${s(TableRow)}:hover {
    background-color: ${theme('fannypack.Table.hover.backgroundColor')} !important;
  }
`;
const stripedProperties = css`
  & ${s(TableBody)} ${s(TableRow)}:nth-child(even) {
    background-color: ${theme('fannypack.Table.striped.backgroundColor')};
  }
`;

export default styled(Box)<LocalTableProps>`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;

  &:not(:last-child) {
    margin-bottom: ${space(4)}rem;
  }

  & {
    ${props => props.isFullWidth && fullWidthProperties};
  }
  & {
    ${props => props.isHoverable && hoverableProperties};
  }
  & {
    ${props => props.isStriped && stripedProperties};
  }

  & {
    ${theme('fannypack.Table.base')};
  }
`;
