import { css, cssClass } from '../styled';
import { palette, space, theme } from '../utils';

export const Card = styleProps => cssClass`
  padding: ${space(3, 'major')(styleProps)}rem;

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const CardContent = styleProps => cssClass`
  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;
