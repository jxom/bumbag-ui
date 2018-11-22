import styled from 'reakit/styled';
import Paragraph from 'reakit/Paragraph';
import { theme } from 'styled-tools';
import Icon from '../Icon/styled';

export default styled(Paragraph)`
  &:not(:last-child) {
    margin: 0 0 1rem;
  }

  & ${Icon} {
    top: 0.1em;
  }

  & {
    ${theme('fannypack.Paragraph.base')};
  }
`;
