import styled from 'reakit/styled';
import { palette } from 'styled-tools';

const sizes = {
  small: {
    width: '1rem',
    height: '1rem'
  },
  default: {
    width: '1.5rem',
    height: '1.5rem'
  },
  medium: {
    width: '2rem',
    height: '2rem'
  },
  large: {
    width: '3rem',
    height: '3rem'
  }
};

export const Spinner = styled.svg`
  ${props => sizes[props.size]} /* Extend size styles */

  & path {
    fill: ${props => props.color || palette()(props)};
  }
`;
