import { css, cssClass } from '../styled';
import { fontSize, fontWeight, palette, space, theme, altitude } from '../utils';

export const Callout = (styleProps) => cssClass`
  background-color: ${palette('background', { dark: 'gray900' })(styleProps)};

  ${
    styleProps.showCloseButton &&
    css`
      position: relative;
    `
  }

  ${styleProps.hasTint && getTintAttributes(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const CalloutContent = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const CalloutHeader = (styleProps) => cssClass`
  margin-bottom: ${space(3, 'minor')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const CalloutTitle = (styleProps) => cssClass`
  font-size: ${fontSize('300')(styleProps)}em;
  font-weight: ${fontWeight('semibold')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const CalloutFooter = (styleProps) => cssClass`
  margin-top: ${space(3, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const CalloutIconWrapper = (styleProps) => cssClass`
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

export const CalloutClose = (styleProps) => cssClass`
  position: absolute;
  top: ${space(1, 'major')(styleProps)}rem;
  right: ${space(1, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const CalloutOverlay = (styleProps) => cssClass`
  max-width: 500px;

  ${altitude('200')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const getTintAttributes = (styleProps: any) => {
  return css`
    && {
      border-color: ${palette(`${styleProps.type}100`)(styleProps)} !important;
    }

    background-color: ${palette(`${styleProps.type}Tint`, { dark: `${styleProps.type}Shade` })(styleProps)};
    color: ${palette(`${styleProps.type}TintInverted`, { dark: `${styleProps.type}ShadeInverted` })(styleProps)};
    fill: ${palette(`${styleProps.type}TintInverted`, { dark: `${styleProps.type}ShadeInverted` })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `tint`)(styleProps)};
    }
  `;
};
