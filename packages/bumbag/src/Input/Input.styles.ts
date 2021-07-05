import { style } from '../Box/Box.styles';
import { css, cssClass } from '../styled';
import { borderRadius, fontSize, palette, space, theme } from '../utils';

export const InputWrapper = (styleProps) => cssClass`
  align-items: center;
  position: relative;

  ${styleProps.size && wrapperSizeProperties(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const Input = (styleProps) => cssClass`
  -webkit-appearance: none;
  background: ${palette('white', { dark: 'black100' })(styleProps)};
  color: ${palette('text')(styleProps)};
  height: 2.75em;
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
    color: ${palette(styleProps.palette || 'gray300')(styleProps)};

    & {
      ${theme(styleProps.themeKey, `styles.placeholder`)(styleProps)};
    }
  }

  ${
    styleProps.containLabel &&
    css`
      height: 3.25em;
      padding-top: 0.8em;
      padding-bottom: 0px;
    `
  }

  ${
    (styleProps.after || styleProps.isLoading) &&
    css`
      & {
        padding-right: 2.3em;
      }
    `
  };

  ${
    styleProps.before &&
    css`
      & {
        padding-left: 2.3em;
      }
    `
  };

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

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

export const InputIcon = (styleProps) => cssClass`
  && {
    fill: ${palette('text100')(styleProps)};
    height: 2.75em;
    margin: 0 0.75em;
    top: 0;

    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const InputSpinner = (styleProps) => cssClass`
  && {
    font-size: inherit;
    align-items: center;
    display: flex;
    position: absolute;
    height: 2.75em;
    margin: 0 0.75em;
    top: 0;
    right: 0;
    z-index: 2;

    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const InputField = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const InputFieldGroup = (styleProps) => cssClass`
  & .bb-InputWrapper {
    flex: 1;
  }

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

/////////////////////////////////////////////////////////////////////

export const LabelWrapper = (styleProps) => cssClass`
  align-items: center;
  color: ${palette(styleProps.palette || 'gray300')(styleProps)};
  display: flex;
  position: absolute;
  height: 100%;
  transition: transform 100ms;
  transform-origin: top left;
  transform: translateY(0px) scale(1);

  ${getLabelWrapperVariantStyles(styleProps)}

  ${
    styleProps.isFocused &&
    css`
      transform: translateY(-1.1em) scale(0.75);

      ${styleProps.containLabel &&
      css`
        margin-left: 0.875em;
        transform: translateY(-0.3em) scale(0.75);
      `}
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
