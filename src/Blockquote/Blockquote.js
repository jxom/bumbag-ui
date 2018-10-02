// @flow
import React, { type Node } from 'react';
import _Blockquote from 'reakit/Blockquote';

import type { Palette } from '../types';

type Props = {
  children: Node,
  className?: string,
  palette?: Palette
};

const Blockquote = ({ children, className, ...props }: Props) => (
  <_Blockquote className={className} {...props}>
    {children}
  </_Blockquote>
);

Blockquote.defaultProps = {
  className: null,
  palette: null
};

export default Blockquote;
