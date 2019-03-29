import { palette, theme } from 'styled-tools';

import { Box } from '../primitives';
import styled from '../styled';
import { IconProps } from './Icon';

export default styled(Box)<IconProps>`
  fill: ${props => (props.color ? palette(props.color)(props) : 'inherit')};
  position: relative;
  font-size: ${props => props.size}em;
  height: 1em;
  width: 1em;
  ${theme('fannypack.Icon.base')};
`;
