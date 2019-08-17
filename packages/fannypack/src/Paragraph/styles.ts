import { cssClass } from '../styled';
import { space, theme } from '../utils';

export const Paragraph = styleProps => cssClass`
  &:not(:last-child) {
    margin-bottom: ${space(4)(styleProps)}rem;
  }

  & {
    ${theme('Paragraph.base')(styleProps)};
  }
`;
