import { css, cssClass } from '../styled';
import { borderRadius, fontSize, palette, theme } from '../utils';

export const TextareaWrapper = (styleProps) => cssClass`
  align-items: center;
  position: relative;
  width: 100%;

  ${styleProps.size && wrapperSizeProperties(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const Textarea = (styleProps) => cssClass`
  -webkit-appearance: none;
  background: ${palette('white', { dark: 'black100' })(styleProps)};
  color: ${palette('text')(styleProps)};
  width: 100%;
  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;

  ${getVariantStyles(styleProps)}

  &[disabled] {
    background-color: ${palette('white700', { dark: 'black200' })(styleProps)};
    box-shadow: unset;
    color: ${palette('text100')(styleProps)};
    cursor: not-allowed;

    & {
      ${theme(styleProps.themeKey, `styles.disabled`)(styleProps)};
    }
  }

  &:focus {
    outline: unset;
    z-index: 2;

    & {
      ${theme(styleProps.themeKey, `styles.focus`)(styleProps)};
    }
  }

  &::placeholder {
    color: ${palette('gray300')(styleProps)};

    & {
      ${theme(styleProps.themeKey, `styles.placeholder`)(styleProps)};
    }
  }

  ${
    styleProps.containLabel &&
    css`
      padding-top: 1em;
      padding-bottom: 0px;
    `
  }

  ${
    styleProps.state &&
    css`
      & {
        border-color: ${palette(`${styleProps.state}`)(styleProps)};
        box-shadow: ${palette(`${styleProps.state}Tint`)(styleProps)} 0px 0px 0px 3px !important;
      }
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TextareaField = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
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

function getVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return css`
      border: 1px solid
        ${palette(styleProps.palette || 'white900', { dark: styleProps.palette || 'gray700' })(styleProps)};
      border-radius: ${borderRadius('default')(styleProps)};
      padding: 0.4em 0.8em;

      &:focus {
        border-color: ${palette(styleProps.palette || 'primary')(styleProps)};
        box-shadow: ${palette(`${styleProps.palette || 'primary'}Tint`, {
            dark: `${styleProps.palette || 'primary'}Shade`,
          })(styleProps)}
          0px 0px 0px 3px !important;

        & {
          ${theme(styleProps.themeKey, `variants.bordered.styles.focus`)(styleProps)};
        }
      }

      ${styleProps.state &&
      css`
        & {
          border-color: ${palette(`${styleProps.state}`)(styleProps)};
          box-shadow: ${palette(`${styleProps.state}Tint`, { dark: `${styleProps.state}Shade` })(styleProps)} 0px 0px
            0px 3px !important;
        }
      `}

      & {
        ${theme(styleProps.themeKey, `variants.bordered.styles.base`)(styleProps)};
      }
    `;
  }
  if (styleProps.variant === 'filled') {
    return css`
      background-color: ${palette('white700', { dark: 'black300' })(styleProps)};
      border: 1px solid transparent;
      border-radius: ${borderRadius('default')(styleProps)};
      padding: 0.4em 0.8em;

      &:focus {
        background-color: ${palette('white', { dark: 'black100' })(styleProps)};
        border-color: ${palette(styleProps.palette || 'primary')(styleProps)};
        box-shadow: ${palette(`${styleProps.palette || 'primary'}Tint`, {
            dark: `${styleProps.palette || 'primary'}Shade`,
          })(styleProps)}
          0px 0px 0px 3px !important;

        & {
          ${theme(styleProps.themeKey, `variants.bordered.styles.focus`)(styleProps)};
        }
      }

      &&[disabled] {
        color: ${palette('gray300')(styleProps)};

        & {
          ${theme(styleProps.themeKey, `variants.bordered.disabled`)(styleProps)};
        }
      }

      ${styleProps.state &&
      css`
        & {
          border-color: ${palette(`${styleProps.state}`)(styleProps)};
          box-shadow: ${palette(`${styleProps.state}Tint`, { dark: `${styleProps.state}Shade` })(styleProps)} 0px 0px
            0px 3px !important;
        }
      `}

      & {
        ${theme(styleProps.themeKey, `variants.filled.styles.base`)(styleProps)};
      }
    `;
  }
  if (styleProps.variant === 'borderless') {
    return css`
      border-top-left-radius: ${borderRadius('default')(styleProps)};
      border-top-right-radius: ${borderRadius('default')(styleProps)};
      border-bottom: 1px solid transparent;

      &:focus {
        border-bottom-color: ${palette(styleProps.palette || 'primary')(styleProps)};
        box-shadow: ${palette(`${styleProps.palette || 'primary'}Tint`, { dark: `${styleProps.palette}Shade` })(
            styleProps
          )}
          0px 2px 0px !important;
      }

      &[disabled] {
        border-radius: ${borderRadius('default')(styleProps)};
        padding: 0.4em 0.8em;
      }

      ${styleProps.state &&
      css`
        & {
          border-color: ${palette(`${styleProps.state}`)(styleProps)};
          box-shadow: ${palette(`${styleProps.state}Tint`, { dark: `${styleProps.state}Shade` })(styleProps)} 0px 2px
            0px !important;
        }
      `}
    `;
  }
  if (styleProps.variant === 'underline') {
    return css`
      border-top-left-radius: ${borderRadius('default')(styleProps)};
      border-top-right-radius: ${borderRadius('default')(styleProps)};
      border-bottom: 1px solid
        ${palette(styleProps.palette || 'white900', { dark: styleProps.palette || 'gray700' })(styleProps)};

      &:focus {
        border-bottom-color: ${palette(styleProps.palette || 'primary')(styleProps)};
        box-shadow: ${palette(`${styleProps.palette || 'primary'}Tint`, { dark: `${styleProps.palette}Shade` })(
            styleProps
          )}
          0px 2px 0px !important;
      }

      &[disabled] {
        padding: 0.4em 0.8em;
      }

      ${styleProps.state &&
      css`
        & {
          border-color: ${palette(`${styleProps.state}`)(styleProps)};
          box-shadow: ${palette(`${styleProps.state}Tint`, { dark: `${styleProps.state}Shade` })(styleProps)} 0px 2px
            0px !important;
        }
      `}
    `;
  }
  return css``;
}

/////////////////////////////////////////////////////////////////////

export const LabelWrapper = (styleProps) => cssClass`
  color: ${palette(styleProps.palette || 'gray300')(styleProps)};
  display: flex;
  padding: 0.4em 0em;
  position: absolute;
  height: 100%;
  transition: transform 100ms;
  transform-origin: top left;
  transform: translateY(0px) scale(1);

  ${getLabelWrapperVariantStyles(styleProps)}

  ${
    styleProps.isFocused &&
    css`
      ${
        (styleProps.variant === 'bordered' || styleProps.variant === 'filled') &&
        css`
          transform: translateY(-0.9em) scale(0.75);
        `
      }

      ${
        (styleProps.variant === 'borderless' || styleProps.variant === 'underline') &&
        css`
          transform: translateY(-1.2em) scale(0.75);
        `
      }

      ${
        styleProps.containLabel &&
        css`
          margin-left: 0.875em;
          transform: translateY(-0.1em) scale(0.75);
        `
      }
    `
  }

  ${
    (styleProps.after || styleProps.isLoading) &&
    css`
      & {
        margin-right: 2.3em;
      }
    `
  };

  ${
    styleProps.before &&
    css`
      & {
        margin-left: 2.3em;
      }
    `
  };

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

function getLabelWrapperVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return css`
      margin-left: 0.8em;

      & {
        ${theme(styleProps.themeKey, `variants.bordered.styles.base`)(styleProps)};
      }
    `;
  }
  if (styleProps.variant === 'filled') {
    return css`
      margin-left: 0.8em;

      & {
        ${theme(styleProps.themeKey, `variants.filled.styles.base`)(styleProps)};
      }
    `;
  }
  return css``;
}

/////////////////////////////////////////////////////////////////////

export const LabelWrapperBackground = (styleProps) => cssClass`
  padding: 0 0.25em;
  position: absolute;
  opacity: 0;
  transition: opacity 100ms;
  transform: translateY(-1em) scale(0.75);
  transform-origin: top left;

  ${getLabelWrapperBackgroundVariantStyles(styleProps)}

  ${
    styleProps.isFocused &&
    css`
      opacity: 1;
    `
  }

  ${
    (styleProps.after || styleProps.isLoading) &&
    css`
      & {
        margin-right: 2.1em;
      }
    `
  };

  ${
    styleProps.before &&
    css`
      & {
        margin-left: 2.1em;
      }
    `
  };

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

function getLabelWrapperBackgroundVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return css`
      background-color: ${palette('white', { dark: 'black100' })(styleProps)};
      margin-left: 0.6em;

      & {
        ${theme(styleProps.themeKey, `variants.bordered.styles.base`)(styleProps)};
      }
    `;
  }
  return css``;
}
