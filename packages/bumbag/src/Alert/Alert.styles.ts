import { css, cssClass, keyframes } from '../styled';
import { altitude, borderRadius, palette, space, theme } from '../utils';

export const Alert = (styleProps) => cssClass`
  background-color: ${palette('background', { dark: 'gray900' })(styleProps)};
  border-radius: ${borderRadius('default')(styleProps)};
  position: relative;
  overflow: hidden;

  ${
    styleProps.variant === 'bordered' &&
    css`
      border: 1px solid ${palette('white800', { dark: 'gray' })(styleProps)};
    `
  }

  ${
    styleProps.variant === 'shadowed' &&
    css`
      ${altitude('100')(styleProps)};
    `
  }

  ${
    styleProps.variant === 'tint' &&
    css`
      background-color: ${palette(`${styleProps.type}Tint`, { dark: `${styleProps.type}Shade` })(styleProps)};
    `
  }

  ${styleProps.variant === 'fill' && getFillAttributes(styleProps)}

  ${
    (styleProps.accent === 'top' || styleProps.accent === 'bottom') &&
    css`
      display: block;
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AlertContent = (styleProps) => cssClass`
  ${
    styleProps.isInline &&
    css`
      display: flex;

      & > *:first-child {
        margin-right: ${space(1)(styleProps)}rem;
      }
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AlertWrapper = (styleProps) => cssClass`
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: ${space(1, 'major')(styleProps)}rem ${space(2, 'major')(styleProps)}rem;

  ${
    styleProps.isInline &&
    css`
      display: flex;

      & > *:first-child {
        margin-right: ${space(1)(styleProps)}rem;
      }
    `
  }

  ${
    styleProps.accent === true &&
    css`
      margin-left: ${styleProps.accentSize};
    `
  }
  ${
    styleProps.accent === 'bottom' &&
    css`
      margin-bottom: ${styleProps.accentSize};
    `
  }
  ${
    styleProps.accent === 'top' &&
    css`
      margin-top: ${styleProps.accentSize};
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AlertTitle = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AlertDescription = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AlertIconWrapper = (styleProps) => cssClass`
  line-height: 0.9;
  margin-right: ${space(4)(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AlertCloseButton = (styleProps) => cssClass`
  && {
    ${
      styleProps.isInline &&
      css`
        padding: 0;
      `
    }
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const AlertAccent = (styleProps) => cssClass`
  position: absolute;
  background-color: ${palette(styleProps.type)(styleProps)};

  ${
    (styleProps.accent === true || styleProps.accent === 'bottom') &&
    css`
      bottom: 0;
    `
  }

  ${
    styleProps.accent === 'top' &&
    css`
      top: 0;
    `
  }

  ${
    (styleProps.accent === true || styleProps.accent === 'left') &&
    css`
      height: 100%;
      width: ${styleProps.accentSize};
    `
  }
  ${
    (styleProps.accent === 'top' || styleProps.accent === 'bottom') &&
    css`
      width: 100%;
      height: ${styleProps.accentSize};
    `
  }

  ${
    styleProps.isBackground &&
    css`
      opacity: 0.3;
      left: 0;
    `
  }

  ${
    !styleProps.isBackground &&
    styleProps.countdown &&
    css`
      ${styleProps.accent === true &&
      css`
        animation: ${heightCountdown} ${styleProps.countdown}ms linear forwards;
      `} ${(styleProps.accent === 'top' || styleProps.accent === 'bottom') &&
      css`
        animation: ${widthCountdown} ${styleProps.countdown}ms linear forwards;
      `};
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const getFillAttributes = (styleProps) => css`
  background-color: ${palette(styleProps.type)(styleProps)};
  color: ${palette(`${styleProps.type}Inverted`)(styleProps)};
`;

export const heightCountdown = keyframes`
  from {
    height: 100%;
  }

  to {
    height: 0%;
  }
`;
export const widthCountdown = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
`;
