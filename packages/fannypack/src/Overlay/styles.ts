import { css, cssClass } from '../styled';
import { space, theme } from '../utils';

export const Overlay = styleProps => cssClass`
  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;

export const OverlayDisclosure = styleProps => cssClass`
  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;
