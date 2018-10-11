// @flow
import React, { type Node } from 'react';

import type { Palette } from '../types';
import { ListItem as _ListItem } from './styled';

type Props = {
  children: Node,
  className?: string,
  color?: Palette
};

const ListItem = ({ children, className, ...props }: Props) => (
  <_ListItem as="li" className={className} {...props}>
    {children}
  </_ListItem>
);

ListItem.defaultProps = {
  className: null,
  color: null
};

export default ListItem;
