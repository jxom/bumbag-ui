import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box/Box';

import { TableBody as _TableBody } from './styled';

export type LocalTableBodyProps = {
  children: React.ReactNode;
  /** Renders a border between rows */
  hasBorders?: boolean;
};
export type TableBodyProps = ReakitBoxProps & LocalTableBodyProps;

export const TableBody: React.FunctionComponent<LocalTableBodyProps> = ({ children, hasBorders, ...props }) => (
  <_TableBody use="tbody" hasBorders={hasBorders} {...props}>
    {children}
  </_TableBody>
);

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
  hasBorders: PropTypes.bool
};
TableBody.defaultProps = {
  hasBorders: false
};

const C: React.FunctionComponent<TableBodyProps> = TableBody;
export default C;
