import { Box } from '../primitives';
import styled from '../styled';
import { palette, theme } from 'styled-tools';

export default styled(Box)`
  fill: ${props => (props.color ? palette(props.color)(props) : 'inherit')};
  position: relative;
  font-size: ${props => props.size}em;
  height: 1em;
  width: 1em;
  ${theme('fannypack.Icon.base')};
`;
