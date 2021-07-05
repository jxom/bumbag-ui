import { css, cssClass } from '../styled';
import { darken, fontSize, getHiddenScrollbarStyles, palette, space, theme } from '../utils';
import { LabelWrapper, LabelWrapperBackground, Select, SelectWrapper } from '../Select/Select.styles';

export const SelectMenu = (styleProps) => cssClass`
  position: relative;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuPopover = (styleProps) => cssClass`
  &&& {
    max-width: 100%;
    width: 100%;
    max-height: ${styleProps.popoverHeight};
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuButtonWrapper = (styleProps) => cssClass`
  ${SelectWrapper(styleProps)};

  width: 100%;
`;

export const SelectMenuButton = (styleProps) => cssClass`
  ${Select(styleProps)};

  & {
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  && {
    position: relative;
  }

  &[aria-expanded="true"] {
    position: unset;
  }

  ${
    styleProps.isSelected &&
    css`
      && {
        position: unset;
      }
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuButtonIcon = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuClearButtonWrapper = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuClearButton = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuButtonIconsWrapper = (styleProps) => cssClass`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 4rem;

  ${
    styleProps.containLabel &&
    css`
      margin-top: -0.75em;
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuButtonText = (styleProps) => cssClass`
  color: ${palette(styleProps.color)(styleProps)};
  max-width: calc(100% - 4rem);
  overflow: hidden;
  text-overflow: ellipsis;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuStaticItem = (styleProps) => cssClass`
  padding: ${space(1.5)(styleProps)}rem ${space(4)(styleProps)}rem;
  width: 100%;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuItem = (styleProps) => cssClass`
  &&& {
    font-weight: 300;

    &[aria-selected="true"] {
      background-color: ${palette('primaryTint')(styleProps)};
      color: ${palette('primary900')(styleProps)};

      &:hover {
        background-color: ${darken(0.01, 'primaryTint')(styleProps)};
      }

      ${
        styleProps.tabIndex === 0 &&
        css`
          background-color: ${darken(0.01, 'primaryTint')(styleProps)};
        `
      }
    }

    &[aria-disabled="true"] {
      color: ${palette('gray100')(styleProps)};
    }
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuItemText = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuItemsWrapper = (styleProps) => cssClass`
  &&& {
    padding: ${space(2)(styleProps)}rem 0;
    overflow-y: scroll;

    ${getHiddenScrollbarStyles()};
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuSearchInputWrapper = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuSearchInput = (styleProps) => cssClass`
  & > input {
    border-color: transparent;
    border-bottom-color: ${palette('white800')(styleProps)};
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuTagsWrapper = (styleProps) => cssClass`
  background: ${palette('white600')(styleProps)};
  border-bottom: 1px solid ${palette('white800')(styleProps)};
  padding: ${space(2)(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuField = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectMenuLabelWrapper = (styleProps) => cssClass`
  ${LabelWrapper(styleProps)};
`;

export const SelectMenuLabelWrapperBackground = (styleProps) => cssClass`
  ${LabelWrapperBackground(styleProps)};
`;

export function wrapperSizeProperties(styleProps) {
  const properties = {
    small: css`
      font-size: ${fontSize('150')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `styles.sizes.small`)(styleProps)};
      }
    `,
    default: css`
      & {
        ${theme(styleProps.themeKey, `styles.sizes.default`)(styleProps)};
      }
    `,
    medium: css`
      font-size: ${fontSize('300')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `styles.sizes.medium`)(styleProps)};
      }
    `,
    large: css`
      font-size: ${fontSize('400')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `styles.sizes.large`)(styleProps)};
      }
    `,
  };
  return properties[styleProps.size];
}
