import Link from 'reakit/Link';
import styled from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { darken } from 'polished';
import Icon from '../Icon/styled';

export default styled(Link)`
  color: ${palette('primary')};
  fill: ${palette('primary')};
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip: ink edges;

  &:hover {
    color: ${props => darken(0.5, palette('primary')(props))};
    fill: ${props => darken(0.5, palette('primary')(props))};
  }

  & ${Icon} {
    top: 0.15em;
  }

  & {
    ${theme('fannypack.Link.base')};
  }
`;
