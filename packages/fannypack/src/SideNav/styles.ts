import { css, cssClass } from '../styled';
import { fontSize, fontWeight, palette, space, theme } from '../utils';

export const SideNav = styleProps => cssClass`
  width: 100%;

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;

export const SideNavLevel = styleProps => cssClass`
  &&& {
    margin-left: unset;
  }

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;

export const SideNavLevelTitle = styleProps => cssClass`
  font-size: ${fontSize('150')(styleProps)}rem;
  font-weight: ${fontWeight('semibold')(styleProps)};
  margin-bottom: ${space(2)(styleProps)}rem;
  padding-left: ${styleProps.level}rem;
  text-transform: uppercase;

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;

export const SideNavItem = styleProps => cssClass`
  align-items: center;
  cursor: pointer;
  display: flex;
  min-height: 2.5em;
  padding: 0 1rem;
  padding-left: ${styleProps.level}rem;
  transition: box-shadow 0.1s ease-in-out 0s, background-color 0.1s, color 0.1s;

  a& {
    color: unset;
    fill: unset;
    text-decoration: unset;

    &:hover {
      color: unset;
      fill: unset;
    }
  }

  &&&:hover {
    color: ${palette('primary')(styleProps)};

    & {
      ${theme(`${styleProps.themeKey}.css.hover`)(styleProps)};
    }
  }

  &:focus {
    outline: unset;
    background-color: ${palette('primaryTint')(styleProps)};

    & {
      ${theme(`${styleProps.themeKey}.css.focus`)(styleProps)};
    }
  }

  ${styleProps.isActive &&
    css`
      background-color: ${palette('primaryTint')(styleProps)};
      box-shadow: inset 3px 0 0 0 ${palette('primary')(styleProps)};

      & {
        ${theme(`${styleProps.themeKey}.css.active`)(styleProps)};
      }
    `}

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;
