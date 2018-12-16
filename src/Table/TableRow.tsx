import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box/Box';

import { TableRow as _TableRow } from './styled';

export type LocalTableRowProps = {
  children: React.ReactNode;
};
export type TableRowProps = ReakitBoxProps & LocalTableRowProps;

export const TableRow: React.FunctionComponent<LocalTableRowProps> = ({ children, ...props }) => (
  <_TableRow use="tr" {...props}>
    {children}
  </_TableRow>
);

TableRow.propTypes = {
  children: PropTypes.node.isRequired
};
TableRow.defaultProps = {};

const C: React.FunctionComponent<TableRowProps> = TableRow;
export default C;
