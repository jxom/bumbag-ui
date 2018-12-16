import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { OverlayHideProps as ReakitOverlayHideProps } from 'reakit/ts';

import { OverlayHide as _OverlayHide } from './styled';

export type LocalOverlayHideProps = {
  children?: React.ReactNode | void;
  hide(): void;
  onClick?(): void;
};
export type OverlayHideProps = LocalOverlayHideProps & ReakitOverlayHideProps;

export const OverlayHide: React.FunctionComponent<LocalOverlayHideProps> = ({ children, ...props }) => (
  <_OverlayHide {...props}>{children}</_OverlayHide>
);

export const overlayHidePropTypes = {
  children: PropTypes.node,
  hide: PropTypes.func.isRequired,
  onClick: PropTypes.func
};
OverlayHide.propTypes = overlayHidePropTypes;

export const overlayHideDefaultProps = {
  children: null,
  onClick: undefined
};
OverlayHide.defaultProps = overlayHideDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<OverlayHideProps> = OverlayHide;
export default C;
