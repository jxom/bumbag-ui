import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HiddenToggleProps as ReakitHiddenToggleProps } from 'reakit/ts/Hidden/HiddenToggle';

import { HiddenToggle as _HiddenToggle } from './styled';

export type LocalHiddenToggleProps = {
  children?: React.ReactNode;
  toggle(): void;
  onClick?(): void;
};
export type HiddenToggleProps = LocalHiddenToggleProps & ReakitHiddenToggleProps;

export const HiddenToggle: React.FunctionComponent<LocalHiddenToggleProps> = ({ children, ...props }) => (
  <_HiddenToggle {...props}>{children}</_HiddenToggle>
);

export const hiddenTogglePropTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  toggle: PropTypes.func.isRequired
};
HiddenToggle.propTypes = hiddenTogglePropTypes;

export const hiddenToggleDefaultProps = {
  children: null,
  onClick: undefined
};
HiddenToggle.defaultProps = hiddenToggleDefaultProps;

const C: React.FunctionComponent<HiddenToggleProps> = HiddenToggle;
export default C;
