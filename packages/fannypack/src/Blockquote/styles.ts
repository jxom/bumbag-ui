import { darken } from 'polished';
import { cssClass, space, theme } from '../styled';

export const Blockquote = styleProps => cssClass`
  border-left: 4px solid ${darken(0.2, 'white')};
  padding: ${space(4)(styleProps)}rem;

  &:not(:last-child) {
    margin-bottom: ${space(4)(styleProps)}rem;
  }

  & {
    ${theme('Blockquote.base')(styleProps)};
  }
`;
