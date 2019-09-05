import { css, cssClass } from '../styled';
import { space, theme } from '../utils';

export const Overlay = styleProps => cssClass`
  & {
    ${theme('Overlay.base')(styleProps)};
  }
`;

export const OverlayDisclosure = styleProps => cssClass`
  & {
    ${theme('Overlay.Disclosure.base')(styleProps)};
  }
`;
