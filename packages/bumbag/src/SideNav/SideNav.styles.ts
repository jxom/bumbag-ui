import { css, cssClass } from '../styled';
import { fontSize, fontWeight, palette, space, theme } from '../utils';

export const SideNav = (styleProps) => cssClass`
  width: 100%;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SideNavLevel = (styleProps) => cssClass`
  &&& {
    margin-left: unset;
  }

  ${
    styleProps.level === 0 &&
    css`
      margin-bottom: ${space(3, 'major')(styleProps)}rem;
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SideNavLevelTitle = (styleProps) => cssClass`
  font-size: ${fontSize('150')(styleProps)}rem;
  font-weight: ${fontWeight('semibold')(styleProps)};
  margin-bottom: ${space(2)(styleProps)}rem;
  padding-left: ${styleProps.level + 1}rem;
  text-transform: uppercase;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SideNavItem = (styleProps) => cssClass`
  align-items: center;
  color: ${palette('text200')(styleProps)};
  cursor: pointer;
  display: flex;
  min-height: 2.75em;
  padding: 0 1rem;
  padding-left: ${styleProps.level === 1 ? space(2, 'major')(styleProps) : styleProps.level}rem;
  transition: box-shadow 0.1s ease-in-out 0s, background-color 0.1s, color 0.1s;

  a& {
    color: ${palette('text200')(styleProps)};
    fill: ${palette('text200')(styleProps)};
    text-decoration: unset;

    &:hover {
      color: ${palette('text200')(styleProps)};
      fill: ${palette('text200')(styleProps)};
    }
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }

  &&&:hover {
    color: ${palette('primary', { dark: 'primary300' })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `styles.hover`)(styleProps)};
    }
  }

  &:focus {
    outline: unset;
    background-color: ${palette('primaryTint', { dark: 'primaryShade' })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `styles.focus`)(styleProps)};
    }
  }

  ${
    styleProps.isActive &&
    css`
      background-color: ${palette('primaryTint', { dark: 'primaryShade' })(styleProps)};
      box-shadow: inset 3px 0 0 0 ${palette('primary')(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.active`)(styleProps)};
      }
    `
  }
`;
