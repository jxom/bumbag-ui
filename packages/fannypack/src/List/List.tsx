import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ListProps as ReakitListProps } from 'reakit/ts';

import _List from './styled';
import ListItem, { ListItemProps } from './ListItem';

export type LocalListProps = {
  children: React.ReactNode;
  className?: string;
  isOrdered?: boolean;
  isHorizontal?: boolean;
};
export type ListProps = LocalListProps & ReakitListProps;
export type ListComponents = {
  Item: React.FunctionComponent<ListItemProps>;
};

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

export const listPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isOrdered: PropTypes.bool,
  isHorizontal: PropTypes.bool
};
List.propTypes = listPropTypes;

export const listDefaultProps = {
  className: undefined,
  isOrdered: false,
  isHorizontal: false
};
List.defaultProps = listDefaultProps;

const C: React.FunctionComponent<ListProps> & ListComponents = List;
export default C;
