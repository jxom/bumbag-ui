import { cssClass } from '../styled';
import { theme } from '../utils';

export const ActionButtons = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
