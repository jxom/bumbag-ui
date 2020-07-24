import { css, cssClass } from '../styled';
import { breakpoint, theme } from '../utils';

export const FieldStack = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
