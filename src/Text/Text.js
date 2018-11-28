import React, { type Node } from 'react';

import type { Palette } from '../types';
import _Text from './styled';

type Props = {
  use?: any,
  className?: string,
  children: Node,
  color?: Palette
};

const Text = ({ className, children, ...props }: Props) => (
  <_Text className={className} {...props}>
    {children}
  </_Text>
);

Text.defaultProps = {
  use: 'span',
  className: undefined,
  color: undefined
};

export default Text;
