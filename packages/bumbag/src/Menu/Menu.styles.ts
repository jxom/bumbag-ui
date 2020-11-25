import { css, cssClass } from '../styled';
import { palette, space, theme, fontSize, fontWeight, letterSpacing } from '../utils';

export const Menu = (styleProps) => cssClass`
  width: 100%;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const MenuItem = (styleProps) => cssClass`
  background-color: unset;
  cursor: pointer;
  display: block;
  font-weight: ${fontWeight('semibold')(styleProps)};
  padding: ${space(1.5)(styleProps)}rem ${space(4)(styleProps)}rem;
  text-align: left;
  width: 100%;
  transition: background-color 0.1s;

  a& {
    color: unset;
    fill: unset;
    text-decoration: unset;

    &:hover {
      color: unset;
      fill: unset;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;

    & {
      ${theme(styleProps.themeKey, `disabled`)(styleProps)};
    }
  }

  &:not(:disabled):focus {
    outline: unset;
    background-color: ${palette('white600', { dark: 'black200' })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `focus`)(styleProps)};
    }
  }
  &:not(:disabled):hover {
    background-color: ${palette('white600', { dark: 'black200' })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `hover`)(styleProps)};
    }
  }
  &:not(:disabled):focus:active,
  &:not(:disabled):hover:active {
    background-color: ${palette('white700', { dark: 'black300' })(styleProps)};
  }

  ${
    styleProps.isActive &&
    css`
      background-color: ${palette('white700', { dark: 'black300' })(styleProps)};

      &&:hover,
      &&:focus {
        background-color: ${palette('white800', { dark: 'black400' })(styleProps)};
      }

      & {
        ${theme(styleProps.themeKey, `active`)(styleProps)};
      }
    `
  }

  & .bb-Icon {
    vertical-align: -0.125em;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const MenuItemIcon = (styleProps) => cssClass`
  ${
    styleProps.isBefore &&
    css`
      margin-right: ${space(2)(styleProps)}rem;
    `
  }
  ${
    styleProps.isAfter &&
    css`
      margin-left: ${space(2)(styleProps)}rem;
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const MenuDivider = (styleProps) => cssClass`
  && {
    margin: ${space(2)(styleProps)}rem 0;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const MenuGroup = (styleProps) => cssClass`
  & + & {
    margin-top: ${space(2, 'major')(styleProps)}rem;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const MenuOptionGroup = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const MenuOptionItem = (styleProps) => cssClass`
  display: flex;
  align-items: center;

  &[aria-checked="true"] {
    color: ${palette('primary')(styleProps)};
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const MenuOptionItemIconWrapper = (styleProps) => cssClass`
  margin-right: ${space(1, 'major')(styleProps)}rem;
  width: 16px;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const MenuGroupTitle = (styleProps) => cssClass`
  color: ${palette('text100')(styleProps)};
  font-size: ${fontSize('100')(styleProps)}rem;
  font-weight: ${fontWeight('semibold')(styleProps)};
  letter-spacing: ${letterSpacing('400')(styleProps)};
  padding: ${space(2)(styleProps)}rem ${space(4)(styleProps)}rem;
  padding-top: ${space(1)(styleProps)}rem;
  text-transform: uppercase;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
