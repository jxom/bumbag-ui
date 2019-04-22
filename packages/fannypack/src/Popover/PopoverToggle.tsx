import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PopoverToggleProps as ReakitPopoverToggleProps } from 'reakit/ts';

import { PopoverToggle as _PopoverToggle } from './styled';

export type LocalPopoverToggleProps = {
  children: React.ReactNode;
  onClick?(): void;
  toggle(): void;
};
export type PopoverToggleProps = ReakitPopoverToggleProps & LocalPopoverToggleProps;

export const PopoverToggle: React.FunctionComponent<LocalPopoverToggleProps> = ({ children, ...props }) => (
  <_PopoverToggle {...props}>{children}</_PopoverToggle>
);

export const popoverTogglePropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  toggle: PropTypes.func.isRequired
};
PopoverToggle.propTypes = popoverTogglePropTypes;

export const popoverToggleDefaultProps = {
  onClick: undefined
};
PopoverToggle.defaultProps = popoverToggleDefaultProps;

const C: React.FunctionComponent<PopoverToggleProps> = PopoverToggle;
export default C;
