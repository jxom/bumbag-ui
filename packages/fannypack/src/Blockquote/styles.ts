import { cssClass } from '../styled';
import { darken, space, theme } from '../utils';

export const Blockquote = styleProps => cssClass`
  border-left: 4px solid ${darken(0.2, 'white')};
  padding: ${space(4)(styleProps)}rem;

  &:not(:last-child) {
    margin-bottom: ${space(4)(styleProps)}rem;
  }

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;
