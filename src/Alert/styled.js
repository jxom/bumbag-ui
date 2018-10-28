import styled from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { Box } from '../primitives';

export default styled(Box)`
  background-color: ${props => palette(props.palette)(props)};
  border: 1px solid ${props => (props.palette === 'default' ? palette('text')(props) : palette(props.palette)(props))};
  border-radius: 4px;
  color: ${props => palette(`${props.palette}Inverted`)(props)};
  padding: 1rem;

  & {
    ${theme('Alert.base')};
  }
`;
