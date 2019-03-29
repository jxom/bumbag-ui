import * as React from 'react';
import * as PropTypes from 'prop-types';
import { SidebarHideProps as ReakitSidebarHideProps } from 'reakit/ts';

import { SidebarHide as _SidebarHide } from './styled';

export type LocalSidebarHideProps = {
  children?: React.ReactNode | void;
  hide(): void;
  onClick?(): void;
};
export type SidebarHideProps = LocalSidebarHideProps & ReakitSidebarHideProps;

export const SidebarHide: React.FunctionComponent<LocalSidebarHideProps> = React.forwardRef(
  ({ children, ...props }, ref) => (
    // @ts-ignore
    <_SidebarHide {...props} ref={ref}>
      {children}
    </_SidebarHide>
  )
);

export const sidebarHidePropTypes = {
  children: PropTypes.node,
  hide: PropTypes.func.isRequired,
  onClick: PropTypes.func
};
SidebarHide.propTypes = sidebarHidePropTypes;

export const sidebarHideDefaultProps = {
  children: null,
  onClick: undefined
};
SidebarHide.defaultProps = sidebarHideDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<SidebarHideProps> = SidebarHide;
export default C;
