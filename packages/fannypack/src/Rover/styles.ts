import { cssClass } from '../styled';
import { theme } from '../utils';

export const Rover = styleProps => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
