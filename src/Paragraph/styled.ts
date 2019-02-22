import Paragraph from 'reakit/Paragraph';

import styled, { space, theme, selector as s } from '../styled';
import Icon from '../Icon/styled';
import { ParagraphProps } from './Paragraph';

export default styled(Paragraph)<ParagraphProps>`
  &:not(:last-child) {
    margin-bottom: ${space(4)}rem;
  }

  & ${s(Icon)} {
    top: 0.15em;
  }

  & {
    ${theme('fannypack.Paragraph.base')};
  }
`;
