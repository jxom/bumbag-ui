import { cssClass } from 'fannypack/styled';
import { theme } from 'fannypack/utils';

export const Markdown = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
