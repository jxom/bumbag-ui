import { css, cssClass } from '../styled';
import { altitude, borderRadius, fontSize, fontWeight, palette, space, theme } from '../utils';

export const Dialog = styleProps => cssClass`
  border-radius: ${borderRadius('default')(styleProps)};
  background-color: white;
  overflow: hidden;
  position: relative;

  ${altitude('100')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const DialogContent = styleProps => cssClass`
  display: flex;
  padding: ${space(3, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const DialogHeader = styleProps => cssClass`
  margin-bottom: ${space(2, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const DialogTitle = styleProps => cssClass`
  font-size: ${fontSize('300')(styleProps)}em;
  font-weight: ${fontWeight('semibold')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const DialogFooter = styleProps => cssClass`
  align-items: center;
  background-color: ${palette('white600')(styleProps)};
  display: flex;
  padding: ${space(5, 'minor')(styleProps)}rem ${space(6, 'minor')(styleProps)}rem;

  ${styleProps.showActionButtons &&
    styleProps.footer &&
    css`
      justify-content: space-between;
    `};

  ${styleProps.showActionButtons &&
    !styleProps.footer &&
    css`
      justify-content: flex-end;
    `};

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const DialogClose = styleProps => cssClass`
  position: absolute;
  top: ${space(2, 'major')(styleProps)}rem;
  right: ${space(2, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const DialogIconWrapper = styleProps => cssClass`
  margin-right: ${space(2, 'major')(styleProps)}rem;

  & .fp-Icon {
    vertical-align: -0.125em;
  }
  & .fp-CalloutContent .fp-Icon {
    font-size: 1.25em;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const DialogModal = styleProps => cssClass`
  max-width: 600px;
  width: 100%;

  ${altitude('400')(styleProps)};

  & .fp-DialogContent {
    max-height: 70vh;
    overflow-y: ${styleProps.hasScroll ? 'scroll' : 'visible'};
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
