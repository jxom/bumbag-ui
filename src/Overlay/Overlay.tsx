import * as React from 'react';
import * as PropTypes from 'prop-types';
import { OverlayProps as ReakitOverlayProps } from '@jmoxey/reakit/ts';

import {
  AnimateProps,
  RestrictHideProps,
  animateDefaultProps,
  animatePropTypes,
  restrictDefaultProps,
  restrictHidePropTypes
} from '../types';
import OverlayContainer, { OverlayContainerProps } from './OverlayContainer';
import OverlayHide, { OverlayHideProps } from './OverlayHide';
import OverlayShow, { OverlayShowProps } from './OverlayShow';
import OverlayToggle, { OverlayToggleProps } from './OverlayToggle';
import _Overlay from './styled';

export type LocalOverlayProps = {
  use?: any;
  children: React.ReactNode;
  className?: string;
  /** Whether or not to show the overlay component */
  isVisible?: boolean;
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

Overlay.propTypes = {
  use: PropTypes.any,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  ...animatePropTypes,
  ...restrictHidePropTypes
};
Overlay.defaultProps = {
  use: undefined,
  className: undefined,
  isVisible: false,
  ...animateDefaultProps,
  ...restrictDefaultProps,
  hideOnEsc: true
};

const C: React.FunctionComponent<OverlayProps> & OverlayComponents = Overlay;
export default C;
