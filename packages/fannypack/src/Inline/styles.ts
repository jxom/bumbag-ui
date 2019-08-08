import { cssClass, theme } from '../styled';

export const Inline = styleProps => cssClass`
  display: inline;

  & {
    ${theme('Inline.base')(styleProps)};
  }
`;
