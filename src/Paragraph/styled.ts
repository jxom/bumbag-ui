// @ts-ignore
import Paragraph from '@jmoxey/reakit/Paragraph';
import { theme } from 'styled-tools';

import styled from '../styled';
import Icon from '../Icon/styled';
import { ParagraphProps } from './Paragraph';

export default styled(Paragraph)<ParagraphProps>`
  &:not(:last-child) {
    margin: 0 0 1rem;
  }

  & ${Icon} {
    top: 0.15em;
  }

  & {
    ${theme('fannypack.Paragraph.base')};
  }
`;
