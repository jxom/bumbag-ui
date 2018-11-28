// @flow
import React, { type Node } from 'react';

import OverlayContainer from './OverlayContainer';
import _Overlay, { OverlayHide, OverlayShow, OverlayToggle } from './styled';

type Props = {
  animated?: boolean,
  use?: any,
  children: Node,
  className?: string,
  /** Delay of the animation if one is specified. */
  delay?: string,
  /** Duration of the animation if one is specified. */
  duration?: string,
  /** Will the overlay have an expand animation when it is toggled on/off? */
  expand?: boolean | string,
  /** Should the overlay be hidden when 'esc' is pressed?  */
  hideOnEsc?: boolean,
  /** Should the overlay be hidden when outside is clicked?  */
  hideOnClickOutside?: boolean,
  /** Whether or not to show the overlay component */
  isVisible?: boolean,
  /** Will the overlay have a fade animation when it is toggled on/off? */
  fade?: boolean,
  /** Will the overlay have a slide animation when it is toggled on/off? */
  slide?: boolean | string,
  /** Timing of the animation */
  timing?: string
};

const Overlay = ({ children, isVisible, ...props }: Props) => (
  <_Overlay visible={isVisible} {...props}>
    {children}
  </_Overlay>
);

Overlay.Container = OverlayContainer;
Overlay.Hide = OverlayHide;
Overlay.Show = OverlayShow;
Overlay.Toggle = OverlayToggle;

Overlay.defaultProps = {
  animated: false,
  use: undefined,
  className: undefined,
  delay: undefined,
  duration: '250ms',
  expand: undefined,
  fade: false,
  hideOnEsc: true,
  hideOnClickOutside: true,
  isVisible: false,
  slide: false,
  timing: 'ease-in-out'
};

export default Overlay;
