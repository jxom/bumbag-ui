import styled from 'reakit/styled';
import Paragraph from 'reakit/Paragraph';
import { theme } from 'styled-tools';

export default styled(Paragraph)`
  &:not(:last-child) {
    margin: 0 0 1rem;
  }

  & {
    ${theme('Paragraph.base')};
  }
`;
