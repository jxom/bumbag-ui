// @flow
import styled, { css } from 'reakit/styled';
import { theme } from 'styled-tools';
import Box from 'reakit/Box';

export const Caption = styled(Box)`
  caption-side: ${props => props.position};

  & {
    ${theme('Table.Caption.base')};
  }
`;

export const TableCell = styled(Box)`
  padding: ${theme('Table.spacing')}rem;

  & {
    ${theme('Table.Cell.base')};
  }
`;

export const TableFoot = styled(Box)`
  font-weight: bold;

  & {
    ${props =>
      props.hasBorder &&
      css`
        border-top: 2px solid ${theme('Table.borderColor')};
      `};
  }

  & {
    ${theme('Table.Foot.base')};
  }
`;

export const TableHead = styled(Box)`
  border: unset;

  & {
    ${props =>
      props.hasBorder &&
      css`
        border-bottom: 2px solid ${theme('Table.borderColor')};
      `};
  }

  & {
    ${theme('Table.Head.base')};
  }
`;

export const TableHeadCell = styled(Box)`
  font-weight: bold;
  padding: ${theme('Table.spacing')}rem;

  & {
    ${theme('Table.HeadCell.base')};
  }
`;

export const TableRow = styled(Box)`
  & {
    ${theme('Table.Row.base')};
  }
`;

export const TableBody = styled(Box)`
  ${props =>
    props.hasBorders &&
    css`
      & ${TableRow} {
        border-bottom: 1px solid ${theme('Table.borderColor')};
      }
    `} /**/

  & {
    ${theme('Table.Body.base')};
  }
`;

const fullWidthProperties = css`
  width: 100%;
`;
const hoverableProperties = css`
  & ${TableBody} ${TableRow}:hover {
    background-color: ${theme('Table.hover.backgroundColor')} !important;
  }
`;
const stripedProperties = css`
  & ${TableBody} ${TableRow}:nth-child(even) {
    background-color: ${theme('Table.striped.backgroundColor')};
  }
`;

export default styled(Box)`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;

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
    ${theme('Table.base')};
  }
`;
