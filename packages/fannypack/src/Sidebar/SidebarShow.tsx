import * as React from 'react';
import * as PropTypes from 'prop-types';
import { SidebarShowProps as ReakitSidebarShowProps } from 'reakit/ts';

import { SidebarShow as _SidebarShow } from './styled';

export type LocalSidebarShowProps = {
  children?: React.ReactNode | void;
  onClick?(): void;
  show(): void;
};
export type SidebarShowProps = LocalSidebarShowProps & ReakitSidebarShowProps;

export const SidebarShow: React.FunctionComponent<LocalSidebarShowProps> = ({ children, ...props }) => (
  <_SidebarShow {...props}>{children}</_SidebarShow>
);

export const sidebarShowPropTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  show: PropTypes.func.isRequired
};
SidebarShow.propTypes = sidebarShowPropTypes;

export const sidebarShowDefaultProps = {
  children: null,
  onClick: undefined
};
SidebarShow.defaultProps = sidebarShowDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<SidebarShowProps> = SidebarShow;
export default C;
