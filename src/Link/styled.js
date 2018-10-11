import Link from 'reakit/Link';
import styled from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { darken } from 'polished';

export default styled(Link)`
  color: ${palette('primary')}
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip: ink edges;

  &:hover {
    color: ${props => darken(0.5, palette('primary')(props))};
  }

  & {
    ${theme('link.base')};
  }
`;
