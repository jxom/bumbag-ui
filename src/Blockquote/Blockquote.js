// @flow
import React, { type Node } from 'react';

import type { Palette } from '../types';
import _Blockquote from './styled';

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
  className: undefined,
  palette: undefined
};

export default Blockquote;
