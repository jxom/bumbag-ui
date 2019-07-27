import { Box as ReakitBox } from 'reakit';
import * as styled from '../styled';

export const StyledBox = styled.styled(ReakitBox)`
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
    ${styled.theme('Box')};
  }
`;

export default StyledBox;
