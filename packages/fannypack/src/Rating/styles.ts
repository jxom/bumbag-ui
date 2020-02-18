import { cssClass } from '../styled';
import { theme } from '../utils';

export const Rating = styleProps => cssClass`
  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;
