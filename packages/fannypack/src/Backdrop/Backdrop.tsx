import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BackdropProps as ReakitBackdropProps } from 'reakit/ts/Backdrop/Backdrop';

import _Backdrop from './styled';
import {
  Omit,
  AnimateProps,
  animatePropTypes,
  animateDefaultProps,
  RestrictHideProps,
  restrictHidePropTypes,
  restrictDefaultProps
} from '../types';

export type LocalBackdropProps = {
  use?: any;
  children?: React.ReactNode;
  className?: string;
  /** Whether or not to show the component */
  isVisible?: boolean;
  onClick?(): void;
} & AnimateProps &
  RestrictHideProps;
export type BackdropProps = ReakitBackdropProps & LocalBackdropProps;

export const Backdrop: React.FunctionComponent<LocalBackdropProps> = ({ children, isVisible, ...props }) => (
  <_Backdrop visible={isVisible} {...props}>
    {children}
  </_Backdrop>
);

export const backdropPropTypes = {
  use: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
  ...animatePropTypes,
  ...restrictHidePropTypes
};
Backdrop.propTypes = backdropPropTypes;

export const backdropDefaultProps = {
  use: undefined,
  children: undefined,
  className: undefined,
  isVisible: false,
  onClick: undefined,
  ...animateDefaultProps,
  ...restrictDefaultProps
};
Backdrop.defaultProps = backdropDefaultProps;

const C: React.FunctionComponent<BackdropProps> = Backdrop;
export default C;
