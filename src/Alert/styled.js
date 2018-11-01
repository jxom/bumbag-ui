import styled from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { darken } from 'polished';
import { Box } from '../primitives';
import Label from '../Label';

export const AlertTitle = styled(Label)`
  & {
    ${theme('fannypack.Alert.title.base')};
  }
`;

export default styled(Box)`
  background-color: ${props =>
    props.palette === 'default' ? palette('textTint')(props) : palette(`${props.palette}Tint`)(props)};
  border-left: 4px solid
    ${props => (props.palette === 'default' ? palette('text')(props) : palette(props.palette)(props))};
  border-radius: 4px;
  color: ${props =>
    props.palette === 'default' ? darken(0.25, palette('text')(props)) : darken(0.25, palette(props.palette)(props))};
  padding: 1rem;

  & {
    ${theme('fannypack.Alert.base')};
  }
`;
