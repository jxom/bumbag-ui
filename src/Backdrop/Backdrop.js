// @flow
import React, { type Node } from 'react';

import _Backdrop from './styled';

type Props = {
  animated?: boolean,
  use?: any,
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
  /** Whether or not to show the backdrop component */
  isVisible?: boolean,
  /** Will the backdrop have a slide animation when it is toggled on/off? */
  slide?: boolean | string,
  /** Timing of the animation */
  timing?: string
};

const Backdrop = ({ children, isVisible, ...props }: Props) => (
  <_Backdrop visible={isVisible} {...props}>
    {children}
  </_Backdrop>
);

Backdrop.defaultProps = {
  animated: false,
  use: undefined,
  className: undefined,
  delay: undefined,
  duration: '250ms',
  expand: undefined,
  fade: false,
  hideOnEsc: undefined,
  hideOnClickOutside: undefined,
  isVisible: false,
  slide: false,
  timing: 'ease-in-out'
};

export default Backdrop;
