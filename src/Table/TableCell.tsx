import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box/Box';

import { TableCell as _TableCell } from './styled';

export interface LocalTableCellProps {
  children?: React.ReactNode;
}
export type TableCellProps = ReakitBoxProps & LocalTableCellProps;

export const TableCell: React.FunctionComponent<LocalTableCellProps> = ({ children, ...props }) => (
  <_TableCell use="td" {...props}>
    {children}
  </_TableCell>
);

TableCell.propTypes = {
  children: PropTypes.node
};
TableCell.defaultProps = {};

const C: React.FunctionComponent<TableCellProps> = TableCell;
export default C;
