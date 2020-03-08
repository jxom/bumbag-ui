import { cssClass } from '../styled';
import { theme } from '../utils';

export const Navigation = styleProps => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
