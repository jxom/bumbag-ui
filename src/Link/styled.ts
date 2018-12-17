// @ts-ignore
import Link from '@jmoxey/reakit/Link';
import { palette, theme } from 'styled-tools';
import { darken } from 'polished';

import styled from '../styled';
import Icon from '../Icon/styled';
import { LinkProps } from './Link';

export default styled(Link)<LinkProps>`
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
