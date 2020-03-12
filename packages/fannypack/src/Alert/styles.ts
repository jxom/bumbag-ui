import { css, cssClass } from '../styled';
import { altitude, borderRadius, palette, space, theme } from '../utils';

export const Alert = styleProps => cssClass`
  background-color: white;
  border-radius: ${borderRadius('default')(styleProps)};
  position: relative;
  display: flex;
  overflow: hidden;

  ${styleProps.variant === 'bordered' &&
    css`
      border: 1px solid ${palette('white800')(styleProps)};
    `}

  ${styleProps.variant === 'shadowed' &&
    css`
      ${altitude('100')(styleProps)};
    `}

  ${styleProps.variant === 'tint' &&
    css`
      background-color: ${palette(`${styleProps.type}Tint`)(styleProps)};
    `}

  ${styleProps.variant === 'fill' && getFillAttributes(styleProps)}

  ${(styleProps.accent === 'top' || styleProps.accent === 'bottom') &&
    css`
      display: block;
    `}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const AlertContent = styleProps => cssClass`
  ${styleProps.isInline &&
    css`
      display: flex;

      & > *:first-child {
        margin-right: ${space(1)(styleProps)}rem;
      }
    `}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const AlertWrapper = styleProps => cssClass`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex: 1;
  padding: ${space(1, 'major')(styleProps)}rem ${space(2, 'major')(styleProps)}rem;

  ${styleProps.isInline &&
    css`
      display: flex;

      & > *:first-child {
        margin-right: ${space(1)(styleProps)}rem;
      }
    `}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const AlertTitle = styleProps => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const AlertDescription = styleProps => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const AlertIconWrapper = styleProps => cssClass`
  line-height: 0.9;
  margin-right: ${space(4)(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const AlertCloseButton = styleProps => cssClass`
  && {
    ${styleProps.isInline &&
      css`
        padding: 0;
      `}
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const AlertAccent = styleProps => cssClass`
  background-color: ${palette(styleProps.type)(styleProps)};

  ${(styleProps.accent === true || styleProps.accent === 'left') &&
    css`
      width: 4px;
    `}
  ${(styleProps.accent === 'top' || styleProps.accent === 'bottom') &&
    css`
      height: 4px;
    `}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const getAccentAttributes = styleProps => {
  const cssValue = `4px solid ${styleProps.type && palette(styleProps.type)(styleProps)}`;
  switch (styleProps.accent) {
    case 'top': {
      return css`
        border-top: ${cssValue};
      `;
    }
    case 'right': {
      return css`
        border-right: ${cssValue};
      `;
    }
    case 'bottom': {
      return css`
        border-bottom: ${cssValue};
      `;
    }
    case 'left':
    default: {
      return css`
        border-left: ${cssValue};
      `;
    }
  }
};

export const getFillAttributes = styleProps => css`
  background-color: ${palette(styleProps.type)(styleProps)};
  color: ${palette(`${styleProps.type}Inverted`)(styleProps)};
`;
