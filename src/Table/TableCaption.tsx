import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from '@jmoxey/reakit/ts/Box/Box';

import { Caption as _Caption } from './styled';

export type LocalTableCaptionProps = {
  children: React.ReactNode;
  /** Positioning of the caption */
  position?: 'top' | 'bottom';
};
export type TableCaptionProps = ReakitBoxProps & LocalTableCaptionProps;

export const TableCaption: React.FunctionComponent<LocalTableCaptionProps> = ({ children, position, ...props }) => (
  <_Caption use="caption" position={position} {...props}>
    {children}
  </_Caption>
);

TableCaption.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom']) as PropTypes.Validator<LocalTableCaptionProps['position']>
};
TableCaption.defaultProps = {
  position: 'top'
};

const C: React.FunctionComponent<TableCaptionProps> = TableCaption;
export default C;
