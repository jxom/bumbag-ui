// @flow
import React, { Fragment, type Element } from 'react';

import { InlineBlock } from '../primitives';
import { getUniqueId } from '../uniqueId';
import Pane from '../Pane';
import PopoverContainer from './PopoverContainer';
import PopoverClose from './PopoverClose';
import PopoverPopover from './PopoverPopover';
import PopoverShow from './PopoverShow';
import PopoverHide from './PopoverHide';
import PopoverToggle from './PopoverToggle';

type Props = {
  use?: any,
  children: Element<any>,
  className?: string,
  content: string | Element<any> | Function,
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
  /** Placement of the popover content */
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
  /** Displays a cross button in the top right corner of the popover content. */
  showCloseButton?: boolean,
  /** Will the popover have a slide animation when it is toggled on/off? */
  slide?: boolean | string,
  /** Timing of the animation */
  timing?: string,
  /** Traps focus within the popover */
  trapFocus?: boolean
};

const Popover = ({ children, content, showCloseButton, ...props }: Props) => (
  <PopoverContainer>
    {popover => (
      <InlineBlock relative>
        {React.cloneElement(children, { use: PopoverToggle, ...popover })}
        <PopoverPopover border="shadow" padding="small" {...props} {...popover} use={Pane}>
          {({ initialFocusRef }) => (
            <Fragment>
              {showCloseButton && <PopoverClose elementRef={initialFocusRef} {...popover} />}{/* eslint-disable-line */}
              {typeof content === 'function' ? content({ initialFocusRef, ...popover }) : content}
            </Fragment>
          )}
        </PopoverPopover>
      </InlineBlock>
    )}
  </PopoverContainer>
);

Popover.Popover = PopoverPopover;
Popover.Container = PopoverContainer;
Popover.Close = PopoverClose;
Popover.Hide = PopoverHide;
Popover.Show = PopoverShow;
Popover.Toggle = PopoverToggle;

Popover.defaultProps = {
  animated: false,
  use: undefined,
  className: undefined,
  delay: undefined,
  duration: '100ms',
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
  showCloseButton: false,
  slide: false,
  timing: 'ease-in-out',
  trapFocus: false
};

export default Popover;
