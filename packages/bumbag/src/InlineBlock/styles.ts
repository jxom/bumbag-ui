import { cssClass } from '../styled';
import { theme } from '../utils';

export const InlineBlock = (styleProps) => cssClass`
  display: inline-block;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
