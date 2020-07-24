import { cssClass } from '../styled';
import { theme } from '../utils';

export const Clickable = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
