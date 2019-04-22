import * as React from 'react';
import * as PropTypes from 'prop-types';
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

export const tableBodyPropTypes = {
  children: PropTypes.node.isRequired,
  hasBorders: PropTypes.bool
};
TableBody.propTypes = tableBodyPropTypes;

export const tableBodyDefaultProps = {
  hasBorders: false
}
TableBody.defaultProps = tableBodyDefaultProps;

const C: React.FunctionComponent<TableBodyProps> = TableBody;
export default C;
