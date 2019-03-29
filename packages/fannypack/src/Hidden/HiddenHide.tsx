import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HiddenHideProps as ReakitHiddenHideProps } from 'reakit/ts';

import { HiddenHide as _HiddenHide } from './styled';

export type LocalHiddenHideProps = {
  children?: React.ReactNode | void;
  hide(): void;
  onClick?(): void;
};
export type HiddenHideProps = LocalHiddenHideProps & ReakitHiddenHideProps;

export const HiddenHide: React.FunctionComponent<LocalHiddenHideProps> = React.forwardRef(
  ({ children, ...props }, ref) => (
    // @ts-ignore
    <_HiddenHide {...props} ref={ref}>
      {children}
    </_HiddenHide>
  )
);

HiddenHide.propTypes = {
  children: PropTypes.node,
  hide: PropTypes.func.isRequired,
  onClick: PropTypes.func
};
HiddenHide.defaultProps = {
  children: null,
  onClick: undefined
};

// @ts-ignore
const C: React.FunctionComponent<HiddenHideProps> = HiddenHide;
export default C;
