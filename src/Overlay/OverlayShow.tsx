import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { OverlayShowProps as ReakitOverlayShowProps } from '@jmoxey/reakit/ts';

import { OverlayShow as _OverlayShow } from './styled';

export type LocalOverlayShowProps = {
  children?: React.ReactNode | void;
  onClick?(): void;
  show(): void;
};
export type OverlayShowProps = LocalOverlayShowProps & ReakitOverlayShowProps;

export const OverlayShow: React.FunctionComponent<LocalOverlayShowProps> = ({ children, ...props }) => (
  <_OverlayShow {...props}>{children}</_OverlayShow>
);

export const overlayShowPropTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  show: PropTypes.func.isRequired
};
OverlayShow.propTypes = overlayShowPropTypes;

export const overlayShowDefaultProps = {
  children: null,
  onClick: undefined
};
OverlayShow.defaultProps = overlayShowDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<OverlayShowProps> = OverlayShow;
export default C;
