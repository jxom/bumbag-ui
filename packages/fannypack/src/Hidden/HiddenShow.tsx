import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HiddenShowProps as ReakitHiddenShowProps } from 'reakit/ts';

import { HiddenShow as _HiddenShow } from './styled';

export type LocalHiddenShowProps = {
  children?: React.ReactNode | void;
  onClick?(): void;
  show(): void;
};
export type HiddenShowProps = LocalHiddenShowProps & ReakitHiddenShowProps;

export const HiddenShow: React.FunctionComponent<LocalHiddenShowProps> = ({ children, ...props }) => (
  <_HiddenShow {...props}>{children}</_HiddenShow>
);

export const hiddenShowPropTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  show: PropTypes.func.isRequired
};
HiddenShow.propTypes = hiddenShowPropTypes;

export const hiddenShowDefaultProps = {
  children: null,
  onClick: undefined
};
HiddenShow.defaultProps = hiddenShowDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<HiddenShowProps> = HiddenShow;
export default C;
