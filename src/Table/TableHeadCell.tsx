import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box/Box';

import { TableHeadCell as _TableHeadCell } from './styled';

export type LocalTableHeadCellProps = {
  children?: React.ReactNode;
};
export type TableHeadCellProps = ReakitBoxProps & LocalTableHeadCellProps;

export const TableHeadCell: React.FunctionComponent<LocalTableHeadCellProps> = ({ children, ...props }) => (
  <_TableHeadCell use="th" {...props}>
    {children}
  </_TableHeadCell>
);

TableHeadCell.propTypes = {
  children: PropTypes.node
};
TableHeadCell.defaultProps = {};

const C: React.FunctionComponent<TableHeadCellProps> = TableHeadCell;
export default C;
