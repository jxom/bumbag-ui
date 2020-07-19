import { css, cssClass } from '../styled';
import { space, theme } from '../utils';

export const Disclosure = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const DisclosureContent = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
