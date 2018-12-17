import List from '@jmoxey/reakit/List';
import { theme } from 'styled-tools';

import { Box } from '../primitives';
import { styled, css } from '../styled';
import { ListItemProps } from './ListItem';
import { ListProps } from './List';

const orderedProperties = css`
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

const horizontalProperties = css`
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

export default styled(List)<ListProps>`
  list-style: unset;
  list-style-type: none;

  & & {
    margin-left: 1rem;
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
