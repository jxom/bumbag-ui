import { css, cssClass } from '../styled';
import {
  altitude,
  borderRadius,
  fontSize,
  fontWeight,
  getHiddenScrollbarStyles,
  palette,
  space,
  theme,
} from '../utils';

export const Dialog = (styleProps) => cssClass`
  border-radius: ${borderRadius('default')(styleProps)};
  background-color: ${palette('background')(styleProps)};
  overflow: hidden;
  position: relative;

  ${altitude('100')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const DialogContent = (styleProps) => cssClass`
  padding: ${space(3, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const DialogHeader = (styleProps) => cssClass`
  margin-bottom: ${space(2, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const DialogTitle = (styleProps) => cssClass`
  font-size: ${fontSize('300')(styleProps)}em;
  font-weight: ${fontWeight('semibold')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const DialogFooter = (styleProps) => cssClass`
  align-items: center;
  background-color: ${palette('white600', { dark: 'black200' })(styleProps)};
  padding: ${space(5, 'minor')(styleProps)}rem ${space(6, 'minor')(styleProps)}rem;

  ${
    styleProps.showActionButtons &&
    styleProps.footer &&
    css`
      justify-content: space-between;
    `
  };

  ${
    styleProps.showActionButtons &&
    !styleProps.footer &&
    css`
      justify-content: flex-end;
    `
  };

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const DialogClose = (styleProps) => cssClass`
  position: absolute;
  top: ${space(2, 'major')(styleProps)}rem;
  right: ${space(2, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const DialogIconWrapper = (styleProps) => cssClass`
  margin-right: ${space(2, 'major')(styleProps)}rem;

  & .bb-Icon {
    vertical-align: -0.125em;
  }
  & .bb-CalloutContent .bb-Icon {
    font-size: 1.25em;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const DialogModal = (styleProps) => cssClass`
  max-width: 600px;
  width: 100%;

  ${altitude('400')(styleProps)};

  & .bb-DialogContent {
    max-height: 70vh;
    overflow-y: ${styleProps.hasScroll ? 'scroll' : 'visible'};

    ${getHiddenScrollbarStyles()};
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
