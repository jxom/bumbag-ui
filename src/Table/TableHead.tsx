import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from '@jmoxey/reakit/ts/Box/Box';

import { TableHead as _TableHead } from './styled';

export type LocalTableHeadProps = {
  children: React.ReactNode;
  /** Renders a bottom border on the header row */
  hasBorder?: boolean;
};
export type TableHeadProps = ReakitBoxProps & LocalTableHeadProps;

export const TableHead: React.FunctionComponent<LocalTableHeadProps> = ({ children, hasBorder, ...props }) => (
  <_TableHead use="thead" hasBorder={hasBorder} {...props}>
    {children}
  </_TableHead>
);

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
  hasBorder: PropTypes.bool
};
TableHead.defaultProps = {
  hasBorder: true
};

const C: React.FunctionComponent<TableHeadProps> = TableHead;
export default C;
