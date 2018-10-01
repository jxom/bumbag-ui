import React, { type Node } from 'react';

import type { Palette } from '../types';
import _Text from './styled';

type Props = {
  as?: any,
  className?: string,
  children: Node,
  palette?: Palette
};

const Text = ({ className, children, ...props }: Props) => (
  <_Text className={className} {...props}>
    {children}
  </_Text>
);

Text.defaultProps = {
  as: 'span',
  className: null,
  palette: null
};

export default Text;
