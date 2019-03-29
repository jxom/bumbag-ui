import * as React from 'react';
import * as PropTypes from 'prop-types';
import { OverlayProps as ReakitOverlayProps } from 'reakit/ts';

import {
  AnimateProps,
  Placement,
  RestrictHideProps,
  animateDefaultProps,
  animatePropTypes,
  placementPropType,
  restrictDefaultProps,
  restrictHidePropTypes
} from '../types';
import OverlayContainer, { OverlayContainerProps } from './OverlayContainer';
import OverlayHide, { OverlayHideProps } from './OverlayHide';
import OverlayShow, { OverlayShowProps } from './OverlayShow';
import OverlayToggle, { OverlayToggleProps } from './OverlayToggle';
import _Overlay from './styled';

export type LocalOverlayProps = {
  children: React.ReactNode;
  className?: string;
  /** Whether or not to show the overlay component */
  isVisible?: boolean;
  placement?: Placement;
};
export type OverlayProps = LocalOverlayProps & AnimateProps & RestrictHideProps & ReakitOverlayProps;
export type OverlayComponents = {
  Container: React.FunctionComponent<OverlayContainerProps>;
  Hide: React.FunctionComponent<OverlayHideProps>;
  Show: any;
  Toggle: any;
};

export const Overlay: React.FunctionComponent<LocalOverlayProps & AnimateProps & RestrictHideProps> &
  OverlayComponents = ({ children, isVisible, ...props }) => (
  <_Overlay visible={isVisible} {...props}>
    {children}
  </_Overlay>
);

Overlay.Container = OverlayContainer;
Overlay.Hide = OverlayHide;
Overlay.Show = OverlayShow;
Overlay.Toggle = OverlayToggle;

export const overlayPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  placement: placementPropType,
  ...animatePropTypes,
  ...restrictHidePropTypes
};
Overlay.propTypes = overlayPropTypes;

export const overlayDefaultProps = {
  className: undefined,
  isVisible: false,
  placement: undefined,
  ...animateDefaultProps,
  ...restrictDefaultProps,
  hideOnEsc: true
};
Overlay.defaultProps = overlayDefaultProps;

const C: React.FunctionComponent<OverlayProps> & OverlayComponents = Overlay;
export default C;
