// @flow
import React, { type Node } from 'react';

import type { Palette, Size } from '../types';
import _Tag from './styled';

type Props = {
  className?: string,
  children: Node,
  palette?: Palette,
  size?: Size
};

const Tag = ({ children, ...props }: Props) => <_Tag {...props}>{children}</_Tag>;

Tag.defaultProps = {
  className: undefined,
  palette: 'text',
  title: undefined,
  size: undefined
};

export default Tag;
