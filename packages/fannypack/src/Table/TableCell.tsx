import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box/Box';

import { TableCell as _TableCell } from './styled';

export type LocalTableCellProps = {
  children?: React.ReactNode;
};
export type TableCellProps = ReakitBoxProps & LocalTableCellProps;

export const TableCell: React.FunctionComponent<LocalTableCellProps> = ({ children, ...props }) => (
  <_TableCell use="td" {...props}>
    {children}
  </_TableCell>
);

export const tableCellPropTypes = {
  children: PropTypes.node
};
TableCell.propTypes = tableCellPropTypes;

export const tableCellDefaultProps = {
  children: undefined
};
TableCell.defaultProps = tableCellDefaultProps;

const C: React.FunctionComponent<TableCellProps> = TableCell;
export default C;
