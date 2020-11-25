import { cssClass } from '../styled';
import { darken, space, theme } from '../utils';

export const Blockquote = (styleProps) => cssClass`
  border-left: 4px solid ${darken(0.2, 'white')(styleProps)};
  padding: ${space(6)(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
