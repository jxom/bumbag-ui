import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { ListItem as _ListItem } from './styled';

export type LocalListItemProps = {
  children: React.ReactNode;
  className?: string;
};
export type ListItemProps = ReakitBoxProps & LocalListItemProps;

export const ListItem: React.FunctionComponent<LocalListItemProps> = ({ children, className, ...props }) => (
  <_ListItem use="li" className={className} {...props}>
    {children}
  </_ListItem>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
ListItem.defaultProps = {
  className: undefined
};

const C: React.FunctionComponent<ListItemProps> = ListItem;
export default C;
