import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { PopoverProps as ReakitPopoverProps } from 'reakit/ts';

import { isFunction } from '../_utils/assert';
import TrapFocus from '../_utils/TrapFocus';
import { Box } from '../primitives';
import {
  AnimateProps,
  Placement,
  RestrictHideProps,
  animateDefaultProps,
  placementPropType,
  restrictDefaultProps,
  animatePropTypes,
  restrictHidePropTypes
} from '../types';
import _Popover from './styled';

export type LocalPopoverPopoverProps = {
  children: React.ReactNode | (({ initialFocusRef }: { initialFocusRef?: React.RefObject<any> }) => React.ReactNode);
  className?: string;
  /** Whether or not to show the popover component */
  isVisible?: boolean;
  flip?: boolean;
  gutter?: number | string;
  placement?: Placement;
  shift?: boolean;
  /** Traps focus within the popover */
  trapFocus?: boolean;
} & AnimateProps &
  RestrictHideProps;
export type PopoverPopoverProps = LocalPopoverPopoverProps & ReakitPopoverProps;

export const PopoverPopover: React.FunctionComponent<LocalPopoverPopoverProps> = ({
  children,
  isVisible,
  trapFocus,
  ...props
}) => (
  <_Popover visible={isVisible} {...props}>
    {trapFocus ? (
      <TrapFocus isActive={isVisible}>
        {({ fallbackFocusRef, initialFocusRef }) => (
          <Box elementRef={fallbackFocusRef}>{isFunction(children) ? children({ initialFocusRef }) : children}</Box>
        )}
      </TrapFocus>
    ) : isFunction(children) ? (
      children({})
    ) : (
      children
    )}
  </_Popover>
);

export const popoverPopoverPropTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  flip: PropTypes.bool,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placement: placementPropType,
  shift: PropTypes.bool,
  trapFocus: PropTypes.bool,
  ...animatePropTypes,
  ...restrictHidePropTypes
};
PopoverPopover.propTypes = popoverPopoverPropTypes;

export const popoverPopoverDefaultProps: Partial<LocalPopoverPopoverProps> = {
  className: undefined,
  flip: true,
  gutter: 12,
  isVisible: false,
  placement: 'bottom',
  shift: true,
  trapFocus: false,
  ...animateDefaultProps,
  ...restrictDefaultProps,
  hideOnEsc: true,
  hideOnClickOutside: true
};
PopoverPopover.defaultProps = popoverPopoverDefaultProps;

const C: React.FunctionComponent<PopoverPopoverProps> = PopoverPopover;
export default C;
