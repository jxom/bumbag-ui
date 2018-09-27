// @flow
import React, { type Node } from 'react';

import _Column from './styled';

type Props = {
  children: Node,
  className: string,
  spread: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  spreadOffset: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 'left' | 'both' | 'right'
};

const Column = ({ children, className, spread, spreadOffset, ...props }: Props) => (
  <_Column className={className} spread={spread} spreadOffset={spreadOffset} {...props}>
    {children}
  </_Column>
);

Column.defaultProps = {
  className: null,
  spread: null,
  spreadOffset: null
};

export default Column;
