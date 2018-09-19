import styled from 'reakit/styled';
import Box from 'reakit/Box';
import Button from 'reakit/Button';
import { palette } from 'styled-tools';
import { darken } from 'polished';

export const DefaultButton = styled(Button)`
  background-color: ${palette()};
  border: 1px solid ${props => darken(0.2, palette()(props))};
  color: ${props => palette(`${props.palette}Inverted`)(props)};
`;

export const OutlinedButton = styled(Button)`
  background-color: unset;
  border: 1px solid ${palette()};
  color: ${palette()};

  &:hover {
    color: ${props => palette(`${props.palette}Inverted`)(props)};
  }
`;

export const LinkButton = styled(Button)`
  border: 0;
  background: unset;
  box-shadow: unset !important;
  color: ${props => (props.palette === 'default' ? palette('text')(props) : palette()(props))};
  text-decoration: underline;

  &:hover {
    color: ${props =>
      props.palette === 'default' ? darken(0.5, palette('text')(props)) : darken(0.5, palette()(props))};
  }
`;

export const SpinnerWrapper = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    opacity: 0;
  }
`;
