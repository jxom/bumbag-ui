import { cssClass } from '../styled';
import { theme } from '../utils';

export const Tabbable = styleProps => cssClass`
  &[disabled],
  &[aria-disabled="true"] {
    opacity: 0.5;

    & {
      ${theme(`${styleProps.themeKey}.disabled`)(styleProps)};
    }
  }

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;
