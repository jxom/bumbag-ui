import { cssClass } from '../styled';
import { theme } from '../utils';

export const Tabbable = (styleProps) => cssClass`
  &[disabled],
  &[aria-disabled="true"] {
    opacity: 0.5;

    & {
      ${theme(styleProps.themeKey, `styles.disabled`)(styleProps)};
    }
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
