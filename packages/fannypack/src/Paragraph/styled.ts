import _Paragraph from 'reakit/Paragraph';

import styled, { space, theme, selector } from '../styled';
import Icon from '../Icon/styled';
import { ParagraphProps } from './Paragraph';

export const Paragraph = styled(_Paragraph)<ParagraphProps>`
  &:not(:last-child) {
    margin-bottom: ${space(4)}rem;
  }

  & ${selector(Icon)} {
    top: 0.15em;
  }

  & {
    ${theme('fannypack.Paragraph.base')};
  }
`;

export default Paragraph;
