import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box/Box';

import { TableFoot as _TableFoot } from './styled';

export type LocalTableFootProps = {
  children: React.ReactNode;
  /** Renders a top border on the footer row */
  hasBorder?: boolean;
};
export type TableFootProps = ReakitBoxProps & LocalTableFootProps;

export const TableFoot: React.FunctionComponent<LocalTableFootProps> = ({ children, hasBorder, ...props }) => (
  <_TableFoot use="tfoot" hasBorder={hasBorder} {...props}>
    {children}
  </_TableFoot>
);

export const tableFootPropTypes = {
  children: PropTypes.node.isRequired,
  hasBorder: PropTypes.bool
};
TableFoot.propTypes = tableFootPropTypes;

export const tableFootDefaultProps = {
  hasBorder: true
};
TableFoot.defaultProps = tableFootDefaultProps;

const C: React.FunctionComponent<TableFootProps> = TableFoot;
export default C;
