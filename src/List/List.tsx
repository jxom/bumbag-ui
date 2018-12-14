import * as React from 'react';
import { ListProps as ReakitListProps } from 'reakit/ts';

import _List from './styled';
import ListItem, { ListItemProps } from './ListItem';

export interface LocalListProps {
  children: React.ReactNode;
  className?: string;
  isOrdered?: boolean;
  isHorizontal?: boolean;
}
export type ListProps = LocalListProps & ReakitListProps;
export interface ListComponents {
  Item: React.FunctionComponent<ListItemProps>;
}

export const List: React.FunctionComponent<LocalListProps> & ListComponents = ({
  children,
  className,
  isOrdered,
  ...props
}) => (
  <_List use={isOrdered ? 'ol' : undefined} className={className} isOrdered={isOrdered} {...props}>
    {children}
  </_List>
);

List.Item = ListItem;

List.defaultProps = {
  className: undefined,
  isOrdered: false,
  isHorizontal: false
};

const C: React.FunctionComponent<ListProps> & ListComponents = List;
export default C;
