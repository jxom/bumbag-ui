import { css, cssClass } from '../styled';
import { palette, space, theme } from '../utils';

export const Alert = styleProps => cssClass`
  background-color: ${palette(`${styleProps.type}Tint`)(styleProps)};
  border-radius: 4px;
  padding: ${space(1, 'major')(styleProps)}rem ${space(2, 'major')(styleProps)}rem;
  position: relative;

  ${styleProps.accent && getAccentAttributes(styleProps)}
  ${styleProps.isFilled && getFillAttributes(styleProps)}

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
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
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const AlertTitle = styleProps => cssClass`
  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const AlertDescription = styleProps => cssClass`
  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const AlertIconWrapper = styleProps => cssClass`
  line-height: 0.9;
  margin-right: ${space(4)(styleProps)}rem;

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
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
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
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
