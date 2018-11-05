// @flow
import React, { type Node } from 'react';

import type { Palette } from '../types';
import _List from './styled';
import ListItem from './ListItem';

type Props = {
  children: Node,
  className?: string,
  color?: Palette,
  isOrdered?: boolean,
  isHorizontal?: boolean
};

const List = ({ children, className, isOrdered, ...props }: Props) => (
  <_List as={isOrdered ? 'ol' : null} className={className} isOrdered={isOrdered} {...props}>
    {children}
  </_List>
);

List.Item = ListItem;

List.defaultProps = {
  className: null,
  color: null,
  isOrdered: false,
  isHorizontal: false
};

export default List;
