import { cssClass } from '../styled';
import { theme } from '../utils';

export const InlineFlex = (styleProps) => cssClass`
  display: inline-flex;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
