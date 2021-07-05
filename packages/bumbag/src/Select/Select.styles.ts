import { inputStyles } from '../Input';
import { css, cssClass } from '../styled';
import { borderRadius, fontSize, palette, lineHeight, theme } from '../utils';

export const Select = (styleProps) => cssClass`
  appearance: none;
  color: ${palette(styleProps.color)(styleProps)};
  height: 2.75em;
  line-height: ${lineHeight('default')(styleProps)};
  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;
  position: relative;
  width: 100%;

  ${getVariantStyles(styleProps)};

  &[disabled],
  &[aria-disabled="true"] {
    background: ${palette('white700', { dark: 'black200' })(styleProps)};
    box-shadow: unset;

    & {
      ${theme(styleProps.themeKey, `styles.disabled`)(styleProps)};
    }
  }

  &[disabled] + .bb-Icon {
    color: ${palette('gray400')(styleProps)};
    fill: ${palette('gray400')(styleProps)};
  }

  &:focus {
    outline: unset;
    z-index: 2;
    position: unset;
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
    !styleProps.isPlaceholderSelected &&
    css`
      position: unset;
    `
  }

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
      padding: 0.4em ${styleProps.hasIcon ? '2em' : '0.8em'} 0.4em 0.8em;

      &&:focus,
      &[aria-expanded='true'] {
        border-color: ${palette(styleProps.palette || 'primary')(styleProps)};
        box-shadow: ${palette(`${styleProps.palette || 'primary'}Tint`, {
            dark: `${styleProps.palette || 'primary'}Shade`,
          })(styleProps)}
          0px 0px 0px 3px !important;
      }

      ${styleProps.state &&
      css`
        & {
          border-color: ${palette(`${styleProps.state}`)(styleProps)};
          box-shadow: ${palette(`${styleProps.state}Tint`, {
              dark: `${styleProps.state}Shade`,
            })(styleProps)}
            0px 0px 0px 3px !important;
        }
      `}

      & {
        ${theme(styleProps.themeKey, `variants.bordered.styles.base`)(styleProps)};
      }
    `;
  }
  if (styleProps.variant === 'filled') {
    return css`
      border: 1px solid transparent;
      border-radius: ${borderRadius('default')(styleProps)};
      padding: 0.4em ${styleProps.hasIcon ? '2em' : '0.8em'} 0.4em 0.8em;

      &&:focus,
      &[aria-expanded='true'] {
        border-color: ${palette(styleProps.palette || 'primary')(styleProps)};
        box-shadow: ${palette(`${styleProps.palette || 'primary'}Tint`, {
            dark: `${styleProps.palette || 'primary'}Shade`,
          })(styleProps)}
          0px 0px 0px 3px !important;
      }

      ${styleProps.state &&
      css`
        & {
          border-color: ${palette(`${styleProps.state}`)(styleProps)};
          box-shadow: ${palette(`${styleProps.state}Tint`, {
              dark: `${styleProps.state}Shade`,
            })(styleProps)}
            0px 0px 0px 3px !important;
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

      ${styleProps.hasIcon &&
      css`
        padding-right: 2em;
      `}

      &:focus,
      &[aria-expanded='true'] {
        border-bottom-color: ${palette(styleProps.palette || 'primary')(styleProps)};
        box-shadow: ${palette(`${styleProps.palette || 'primary'}Tint`, { dark: `${styleProps.palette}Shade` })(
            styleProps
          )}
          0px 2px 0px !important;
      }

      &[disabled] {
        border-radius: ${borderRadius('default')(styleProps)};
        padding: 0.4em 2em 0.4em 0.8em;
      }

      ${styleProps.disabled &&
      css`
        border-radius: ${borderRadius('default')(styleProps)};
        padding: 0.4em 0.8em 0.4em 0.8em;
      `}

      ${styleProps.state &&
      css`
        & {
          border-color: ${palette(`${styleProps.state}`)(styleProps)};
          box-shadow: ${palette(`${styleProps.state}Tint`, { dark: `${styleProps.state}Shade` })(styleProps)} 0px 2px
            0px !important;
        }
      `}

      & {
        ${theme(styleProps.themeKey, `variants.borderless.styles.base`)(styleProps)};
      }
    `;
  }
  if (styleProps.variant === 'underline') {
    return css`
      border-top-left-radius: ${borderRadius('default')(styleProps)};
      border-top-right-radius: ${borderRadius('default')(styleProps)};
      border-bottom: 1px solid
        ${palette(styleProps.palette || 'white900', { dark: styleProps.palette || 'gray700' })(styleProps)};

      ${styleProps.hasIcon &&
      css`
        padding-right: 2em;
      `}

      &:focus,
      &[aria-expanded='true'] {
        border-bottom-color: ${palette(styleProps.palette || 'primary')(styleProps)};
        box-shadow: ${palette(`${styleProps.palette || 'primary'}Tint`, { dark: `${styleProps.palette}Shade` })(
            styleProps
          )}
          0px 2px 0px !important;
      }

      &[disabled] {
        padding: 0.4em 2em 0.4em 0.8em;
      }

      ${styleProps.disabled &&
      css`
        padding: 0.4em 0.8em 0.4em 0.8em;
      `}

      ${styleProps.state &&
      css`
        & {
          border-color: ${palette(`${styleProps.state}`)(styleProps)};
          box-shadow: ${palette(`${styleProps.state}Tint`, { dark: `${styleProps.state}Shade` })(styleProps)} 0px 2px
            0px !important;
        }
      `}

      & {
        ${theme(styleProps.themeKey, `variants.underline.styles.base`)(styleProps)};
      }
    `;
  }
  return css``;
}

////////////////////////////////////////////////////////////////////////

export const SelectWrapper = (styleProps) => cssClass`
  align-items: center;
  position: relative;
  width: fit-content;
  transition: background-color 0.2s ease;

  ${getSelectWrapperVariantStyles(styleProps)};
  ${styleProps.size && getWrapperSizeStyles(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

function getSelectWrapperVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return css`
      background-color: ${palette('white', { dark: 'black100' })(styleProps)};
      border-radius: ${borderRadius('default')(styleProps)};

      & {
        ${theme(styleProps.themeKey, `variants.bordered.styles.base`)(styleProps)};
      }
    `;
  }
  if (styleProps.variant === 'filled') {
    return css`
      background-color: ${palette('white700', { dark: 'black300' })(styleProps)};
      border-radius: ${borderRadius('default')(styleProps)};

      &&:focus,
      &[aria-expanded='true'] {
        background-color: ${palette('white', { dark: 'black100' })(styleProps)};
      }

      ${styleProps.isFocused &&
      css`
        background-color: ${palette('white', { dark: 'black100' })(styleProps)};
      `}

      & {
        ${theme(styleProps.themeKey, `variants.filled.styles.base`)(styleProps)};
      }
    `;
  }
  if (styleProps.variant === 'borderless') {
    return css`
      & {
        ${theme(styleProps.themeKey, `variants.borderless.styles.base`)(styleProps)};
      }
    `;
  }
  if (styleProps.variant === 'underline') {
    return css`
      & {
        ${theme(styleProps.themeKey, `variants.underline.styles.base`)(styleProps)};
      }
    `;
  }
  return css``;
}

export function getWrapperSizeStyles(styleProps) {
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

////////////////////////////////////////////////////////////////////////

export const SelectIcon = (styleProps) => cssClass`
  && {
    position: absolute;
    width: 0.8em;
    height: 2.75em;
    right: 0.8em;
    z-index: 1;
    color: ${palette('text')(styleProps)};
    fill: ${palette('text')(styleProps)};
    pointer-events: none;

    ${
      styleProps.containLabel &&
      css`
        height: 3.25em;
      `
    }
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

////////////////////////////////////////////////////////////////////////

export const SelectSpinner = (styleProps) => cssClass`
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

////////////////////////////////////////////////////////////////////////

export const SelectField = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const LabelWrapper = (styleProps) => cssClass`
  ${inputStyles.LabelWrapper(styleProps)};
`;

export const LabelWrapperBackground = (styleProps) => cssClass`
  ${inputStyles.LabelWrapperBackground(styleProps)};
`;
