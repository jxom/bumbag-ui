// @flow
import React, { type Node } from 'react';
import _Paragraph from 'reakit/Paragraph';

import type { Palette } from '../types';

type Props = {
  children: Node,
  className?: string,
  palette?: Palette
};

const Paragraph = ({ children, className, ...props }: Props) => (
  <_Paragraph className={className} {...props}>
    {children}
  </_Paragraph>
);

Paragraph.defaultProps = {
  className: null,
  palette: null
};

export default Paragraph;
