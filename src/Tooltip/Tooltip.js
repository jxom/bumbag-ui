// @flow
import React, { type Node } from 'react';

import type { Placement } from '../types';
import _Tooltip from './styled';

type Props = {
  className?: string,
  children: Node,
  delay?: string,
  duration?: string,
  expand?: boolean,
  /** Space between the tooltip content and the trigger. */
  gutter?: number | string,
  fade?: boolean,
  /** Placement of the tooltip. */
  placement?: Placement,
  slide?: boolean,
  timing?: string
};

const Tooltip = ({ children, ...props }: Props) => <_Tooltip {...props}>{children}</_Tooltip>;

Tooltip.defaultProps = {
  className: undefined,
  delay: undefined,
  duration: '100ms',
  expand: false,
  fade: false,
  gutter: 4,
  placement: 'bottom',
  slide: false,
  timing: 'ease-in-out'
};

export default Tooltip;
