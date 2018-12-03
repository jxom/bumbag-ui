// @flow
import React, { type Node } from 'react';

import TrapFocus from '../_utils/TrapFocus';
import { Box } from '../primitives';
import { getUniqueId } from '../uniqueId';
import _Popover from './styled';

type Props = {
  use?: any,
  children: Function | Node,
  className?: string,
  /** Delay of the animation if one is specified. */
  delay?: string,
  /** Duration of the animation if one is specified. */
  duration?: string,
  /** Will the popover have an expand animation when it is toggled on/off? */
  expand?: boolean | string,
  /** Should the popover be hidden when 'esc' is pressed?  */
  hideOnEsc?: boolean,
  /** Should the popover be hidden when outside is clicked?  */
  hideOnClickOutside?: boolean,
  /** Whether or not to show the popover component */
  isVisible?: boolean,
  /** Will the popover have a fade animation when it is toggled on/off? */
  fade?: boolean,
  flip?: boolean,
  gutter?: number | string,
  placement?:
    | 'auto'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-start'
    | 'right-start'
    | 'bottom-start'
    | 'left-start'
    | 'top-end'
    | 'right-end'
    | 'bottom-end'
    | 'left-end',
  shift?: boolean,
  /** Will the popover have a slide animation when it is toggled on/off? */
  slide?: boolean | string,
  /** Timing of the animation */
  timing?: string,
  /** Traps focus within the popover */
  trapFocus?: boolean
};

const Popover = ({ children, isVisible, trapFocus, ...props }: Props) => (
  <_Popover visible={isVisible} {...props}>
    {trapFocus ? (
      <TrapFocus isActive={isVisible}>
        {({ fallbackFocusRef, initialFocusRef }) => (
          <Box elementRef={fallbackFocusRef}>
            {typeof children === 'function' ? children({ initialFocusRef }) : children}
          </Box>
        )}
      </TrapFocus>
    ) : typeof children === 'function' ? (
      children({})
    ) : (
      children
    )}
  </_Popover>
);

Popover.defaultProps = {
  animated: false,
  use: undefined,
  className: undefined,
  delay: undefined,
  duration: '250ms',
  expand: undefined,
  fade: false,
  flip: true,
  gutter: 12,
  hideOnEsc: true,
  hideOnClickOutside: true,
  isVisible: false,
  placement: 'bottom',
  popoverId: getUniqueId('Popover'),
  shift: true,
  slide: false,
  timing: 'ease-in-out',
  trapFocus: false
};

export default Popover;
