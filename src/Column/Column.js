// @flow
import React, { type Node } from 'react';

import { type ColumnSpread, type ColumnSpreadOffset } from '../types';
import _Column from './styled';

type Props = {
  children: Node,
  className: string,
  spread: ColumnSpread,
  spreadOffset: ColumnSpreadOffset
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
