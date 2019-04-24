import { theme } from 'styled-tools';

import styled, { css, space, selector } from '../styled';
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

export const tableHeadCellText = css`
  font-weight: bold;

  & {
    ${theme('fannypack.Table.HeadCell.text')};
  }
`;
export const TableHeadCell = styled(Box)<LocalTableHeadCellProps>`
  padding: ${theme('fannypack.Table.spacing')}rem;
  vertical-align: middle;
  ${tableHeadCellText}

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
      & ${selector(TableRow)}:not(:last-child) {
        border-bottom: 1px solid ${theme('fannypack.Table.borderColor')};
      }
    `};

  & {
    ${theme('fannypack.Table.Body.base')};
  }
`;

export const hoverableProperties = css`
  & ${selector(TableBody)} ${selector(TableRow)}:hover {
    background-color: ${theme('fannypack.Table.hover.backgroundColor')} !important;
  }
`;
export const stripedProperties = css`
  & ${selector(TableBody)} ${selector(TableRow)}:nth-child(even) {
    background-color: ${theme('fannypack.Table.striped.backgroundColor')};
  }
`;
export const responsiveAttributes = css`
  @media screen and (max-width: ${(props: any) =>
      theme(`fannypack.layout.${props.responsiveBreakpoint}Breakpoint`)}px) {
    & ${selector(TableHead)} {
      display: none;
    }

    & ${selector(TableBody)} ${selector(TableRow)}:not(:last-child) {
      border-bottom: 1px solid ${theme('fannypack.Table.borderColor')};
    }

    & ${selector(TableBody)} ${selector(TableCell)} {
      display: block;
      text-align: left !important;

      &::before {
        display: block;
        content: attr(data-content);
        ${tableHeadCellText}
      }
    }

    & ${selector(TableFoot)} ${selector(TableCell)} {
      display: block;
      text-align: left !important;
    }
  }
`;

export const Table = styled(Box)<LocalTableProps>`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: ${space(4)}rem;
  }

  & {
    ${props =>
      props.isVerticallyCentered &&
      css`
        & ${selector(TableCell)} {
          vertical-align: middle;
        }
      `}
  }
  & {
    ${props => props.isResponsive && responsiveAttributes};
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

export default Table;
