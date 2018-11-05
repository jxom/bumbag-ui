import styled, { css } from 'reakit/styled';
import Box from 'reakit/Box';
import List from 'reakit/List';
import { theme } from 'styled-tools';

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

export const ListItem = styled(Box)`
  margin-bottom: 0.2rem;

  & {
    ${theme('fannypack.List.item.base')};
  }
`;

export default styled(List)`
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
