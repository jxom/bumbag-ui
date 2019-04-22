import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PopoverShowProps as ReakitPopoverShowProps } from 'reakit/ts';

import { PopoverShow as _PopoverShow } from './styled';

export type LocalPopoverShowProps = {
  children: React.ReactNode;
  onClick?(): void;
  show(): void;
};
export type PopoverShowProps = ReakitPopoverShowProps & LocalPopoverShowProps;

export const PopoverShow: React.FunctionComponent<LocalPopoverShowProps> = ({ children, ...props }) => (
  <_PopoverShow {...props}>{children}</_PopoverShow>
);

export const popoverShowPropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  show: PropTypes.func.isRequired
};
PopoverShow.propTypes = popoverShowPropTypes;

export const popoverShowDefaultProps = {
  onClick: undefined
};
PopoverShow.defaultProps = popoverShowDefaultProps;

const C: React.FunctionComponent<PopoverShowProps> = PopoverShow;
export default C;
