import styled, { css } from 'reakit/styled';
import Box from 'reakit/Box';
import List from 'reakit/List';
import { theme } from 'styled-tools';

const orderedAttributes = css`
  list-style-type: decimal;

  & & {
    list-style-type: lower-alpha;
  }

  & & & {
    list-style-type: lower-roman;
  }

  & {
    ${theme('List.ordered')};
  }
`;

export const ListItem = styled(Box)`
  margin-bottom: 0.2rem;

  & {
    ${theme('List.item.base')};
  }
`;

export default styled(List)`
  list-style: unset;
  list-style-type: none;

  & & {
    margin-left: 1rem;
  }

  & {
    ${props => props.isOrdered && orderedAttributes};
  }

  & {
    ${theme('List.base')};
  }
`;
