import { Box as ReakitBox } from 'reakit';
import styled, { theme } from '../styled';
import { BoxProps } from './Box';

export const StyledBox = styled(ReakitBox)<BoxProps>`
  margin: unset;
  padding: unset;
  border: unset;
  background: unset;
  font: unset;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;

  &:focus:not(:focus-visible) {
    outline: none;
  }

  & {
    ${theme('Box.base')};
  }
`;

export default StyledBox;
