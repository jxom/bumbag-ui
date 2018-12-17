import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { PopoverShowProps as ReakitPopoverShowProps } from '@jmoxey/reakit/ts';

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

PopoverShow.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  show: PropTypes.func.isRequired
};
PopoverShow.defaultProps = {
  onClick: undefined
};

const C: React.FunctionComponent<PopoverShowProps> = PopoverShow;
export default C;
