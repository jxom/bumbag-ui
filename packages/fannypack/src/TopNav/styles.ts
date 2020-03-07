import { cssClass } from '../styled';
import { space, theme } from '../utils';

export const TopNav = styleProps => cssClass`
  display: flex;
  height: 44px;

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;

export const TopNavSection = styleProps => cssClass`
  display: flex;

  &:not(:last-child) {
    margin-right: ${space(2, 'major')(styleProps)}rem;
  }

  &&&&& > *:not(:last-child) {
    margin-right: ${space(1, 'major')(styleProps)}rem;
  }

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;

export const TopNavItem = styleProps => cssClass`
  align-self: center;

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;
