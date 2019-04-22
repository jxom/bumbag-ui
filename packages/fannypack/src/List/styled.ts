import _List from 'reakit/List';
import { theme } from 'styled-tools';

import { Box } from '../primitives';
import styled, { css, space } from '../styled';
import { ListItemProps } from './ListItem';
import { ListProps } from './List';

export const orderedProperties = css`
  list-style-type: decimal;

  & & {
    list-style-type: lower-alpha;
  }

  & & & {
    list-style-type: lower-roman;
  }

  & {
    ${theme('fannypack.List.ordered')};
  }
`;

export const horizontalProperties = css`
  & li {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: unset;
  }

  & {
    ${theme('fannypack.List.horizontal')};
  }
`;

export const ListItem = styled(Box)<ListItemProps>`
  margin-bottom: 0.2rem;

  & {
    ${theme('fannypack.List.item.base')};
  }
`;

export const List = styled(_List)<ListProps>`
  list-style: unset;
  list-style-type: none;

  &:not(:last-child) {
    margin-bottom: ${space(4)}rem;
  }

  & & {
    margin-left: ${space(4)}rem;
  }

  & {
    ${props => props.isOrdered && orderedProperties};
  }

  & {
    ${props => props.isHorizontal && horizontalProperties};
  }

  & {
    ${theme('fannypack.List.base')};
  }
`;

export default List;
