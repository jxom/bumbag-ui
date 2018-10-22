// @flow
import React, { type Node } from 'react';

import { Caption as _Caption } from './styled';

type Props = {
  as?: any,
  children: Node,
  className?: string,
  /** Positioning of the caption */
  position?: 'top' | 'bottom'
};

const Caption = ({ as, children, className, position, ...props }: Props) => (
  <_Caption as={as} position={position} {...props}>
    {children}
  </_Caption>
);

Caption.defaultProps = {
  as: 'caption',
  className: null,
  position: 'top'
};

export default Caption;
