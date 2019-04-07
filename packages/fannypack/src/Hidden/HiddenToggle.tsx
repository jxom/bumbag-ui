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

HiddenToggle.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  toggle: PropTypes.func.isRequired
};
HiddenToggle.defaultProps = {
  children: null,
  onClick: undefined
};

const C: React.FunctionComponent<HiddenToggleProps> = HiddenToggle;
export default C;
