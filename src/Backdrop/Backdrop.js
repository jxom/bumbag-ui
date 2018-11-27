// @flow
import React, { type Node } from 'react';

import _Backdrop from './styled';

type Props = {
  animated?: boolean,
  as?: any,
  children: Node,
  className?: string,
  /** Delay of the animation if one is specified. */
  delay?: string,
  /** Duration of the animation if one is specified. */
  duration?: string,
  /** Will the backdrop have an expand animation when it is toggled on/off? */
  expand?: boolean | string,
  /** Will the backdrop have a fade animation when it is toggled on/off? */
  fade?: boolean,
  /** Should the backdrop be hidden when 'esc' is pressed?  */
  hideOnEsc?: boolean,
  /** Should the backdrop be hidden when outside is clicked?  */
  hideOnClickOutside?: boolean,
  /** Will the backdrop have a slide animation when it is toggled on/off? */
  slide?: boolean | string,
  /** Timing of the animation */
  timing?: string,
  /** Whether or not to show the backdrop component */
  visible?: boolean
};

const Backdrop = ({ children, ...props }: Props) => <_Backdrop {...props}>{children}</_Backdrop>;

Backdrop.defaultProps = {
  animated: false,
  as: undefined,
  className: undefined,
  delay: undefined,
  duration: '250ms',
  expand: undefined,
  fade: false,
  hideOnEsc: true,
  hideOnClickOutside: true,
  slide: false,
  timing: 'ease-in-out',
  visible: false
};

export default Backdrop;
