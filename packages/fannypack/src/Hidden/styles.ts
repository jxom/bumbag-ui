import { css, cssClass } from '../styled';
import { space, theme } from '../utils';

export const Hidden = styleProps => cssClass`
  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const HiddenDisclosure = styleProps => cssClass`
  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;
