import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from '@jmoxey/reakit/ts';
import { Omit } from '../types';

import _Pane from './styled';

export type LocalPaneProps = {
  border?: boolean | 'shadow';
  className?: string;
  children?: React.ReactNode;
  isFullWidth?: boolean;
};
export type PaneProps = LocalPaneProps & Omit<ReakitBoxProps, 'border'>;

export const Pane: React.FunctionComponent<LocalPaneProps> = ({ border, children, ...props }) => (
  <_Pane styledBorder={border} {...props}>
    {children}
  </_Pane>
);

Pane.propTypes = {
  border: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.oneOf(['shadow'])]),
  className: PropTypes.string,
  children: PropTypes.node,
  isFullWidth: PropTypes.bool
};
Pane.defaultProps = {
  border: false,
  className: undefined,
  children: undefined,
  isFullWidth: false
};

const C: React.FunctionComponent<PaneProps> = Pane;
export default C;
