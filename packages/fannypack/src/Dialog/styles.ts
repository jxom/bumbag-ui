import { css, cssClass } from '../styled';
import { borderRadius, fontSize, fontWeight, palette, space, theme } from '../utils';

export const Dialog = styleProps => cssClass`
  border-radius: ${borderRadius('default')(styleProps)};

  ${theme('altitudes.100')(styleProps)};

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const DialogContent = styleProps => cssClass`
  padding: ${space(3, 'major')(styleProps)}rem;

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const DialogHeader = styleProps => cssClass`
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${palette('white800')(styleProps)};
  padding: ${space(5, 'minor')(styleProps)}rem ${space(6, 'minor')(styleProps)}rem;

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const DialogTitle = styleProps => cssClass`
  font-size: ${fontSize('300')(styleProps)}em;
  font-weight: ${fontWeight('semibold')(styleProps)};

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const DialogFooter = styleProps => cssClass`
  align-items: center;
  border-top: 1px solid ${palette('white800')(styleProps)};
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
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const DialogClose = styleProps => cssClass`
  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const DialogIconWrapper = styleProps => cssClass`
  margin-right: ${space(2, 'major')(styleProps)}rem;

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;
