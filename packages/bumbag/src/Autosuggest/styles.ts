import { cssClass } from '../styled';
import { getHiddenScrollbarStyles, palette, space, theme } from '../utils';

export const Autosuggest = (styleProps) => cssClass`
  position: relative;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AutosuggestPopover = (styleProps) => cssClass`
  &&& {
    max-width: 100%;
    width: 100%;
    max-height: ${styleProps.popoverHeight};
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AutosuggestItem = (styleProps) => cssClass`
  &&& {
    font-weight: 300;

    &[aria-selected="true"] {
      background-color: ${palette('white600')(styleProps)};
    }

    &[aria-disabled="true"] {
      color: ${palette('gray100')(styleProps)};
    }
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AutosuggestItemText = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AutosuggestStaticItem = (styleProps) => cssClass`
  padding: ${space(1.5)(styleProps)}rem ${space(4)(styleProps)}rem;
  width: 100%;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AutosuggestClearButtonWrapper = (styleProps) => cssClass`
  align-items: center;
  justify-content: center;
  padding: ${space(1)(styleProps)}rem ${space(2)(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AutosuggestClearButton = (styleProps) => cssClass`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${space(1)(styleProps)}rem ${space(2)(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AutosuggestInput = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AutosuggestField = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const ItemsWrapper = (styleProps) => cssClass`
  max-height: calc(${styleProps.popoverHeight} - 1rem);
  overflow-y: scroll;

  ${getHiddenScrollbarStyles()};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
