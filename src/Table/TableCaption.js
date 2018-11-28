// @flow
import React, { type Node } from 'react';

import { Caption as _Caption } from './styled';

type Props = {
  use?: any,
  children: Node,
  /** Positioning of the caption */
  position?: 'top' | 'bottom'
};

const Caption = ({ children, position, ...props }: Props) => (
  <_Caption position={position} {...props}>
    {children}
  </_Caption>
);

Caption.defaultProps = {
  use: 'caption',
  position: 'top'
};

export default Caption;
