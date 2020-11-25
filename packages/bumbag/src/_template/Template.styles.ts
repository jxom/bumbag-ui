import { cssClass } from '../styled';
import { theme } from '../utils';

export const Template = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
