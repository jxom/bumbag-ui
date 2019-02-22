import Link from 'reakit/Link';
import { palette, theme } from 'styled-tools';
import { darken } from 'polished';
import _defaultPalette from '../themes/default/palette';

import styled, { selector as s } from '../styled';
import Icon from '../Icon/styled';
import { LinkProps } from './Link';

const defaultPalette = _defaultPalette({});

export default styled(Link)<LinkProps>`
  color: ${palette('primary')};
  fill: ${palette('primary')};
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip: ink edges;

  &:hover {
    color: ${props => darken(0.5, palette('primary', 0, defaultPalette.primary)(props))};
    fill: ${props => darken(0.5, palette('primary', 0, defaultPalette.primary)(props))};
  }

  & ${s(Icon)} {
    top: 0.15em;
  }

  & {
    ${theme('fannypack.Link.base')};
  }
`;
