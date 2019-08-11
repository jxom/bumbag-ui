import { cssClass, space, theme } from '../styled';

export const Paragraph = styleProps => cssClass`
  &:not(:last-child) {
    margin-bottom: ${space(4)(styleProps)}rem;
  }

  & {
    ${theme('Paragraph.base')(styleProps)};
  }
`;
