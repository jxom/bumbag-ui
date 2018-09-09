import styled from 'reakit/styled';
import BaseButton from 'reakit/Button';
import { darken } from 'polished';

export const Button = styled(BaseButton)`
  background-color: ${props => props.theme.colors[props.color]};
  border: 1px solid ${props => darken(0.2, props.theme.colors[props.color])};
  color: ${props => props.theme.colorsInverted[props.color]};

  &:hover {
    background-color: ${props => darken(0.05, props.theme.colors[props.color])};
  }
  &:hover:active {
    background-color: ${props => darken(0.1, props.theme.colors[props.color])};
  }
`;
