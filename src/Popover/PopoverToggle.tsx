import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { PopoverToggleProps as ReakitPopoverToggleProps } from '@jmoxey/reakit/ts';

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

PopoverToggle.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  toggle: PropTypes.func.isRequired
};
PopoverToggle.defaultProps = {
  onClick: undefined
};

const C: React.FunctionComponent<PopoverToggleProps> = PopoverToggle;
export default C;
