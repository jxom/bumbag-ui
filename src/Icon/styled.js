import { Box } from '../primitives';
import styled from '../styled';
import { palette, theme } from 'styled-tools';

export default styled(Box)`
  fill: ${props => palette(props.color || 'text')(props)};
  position: relative;
  top: 0.1em;
  ${theme('fannypack.Icon.base')};
`;
