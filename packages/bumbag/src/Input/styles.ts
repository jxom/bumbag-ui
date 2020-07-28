import { css, cssClass } from '../styled';
import { borderRadius, fontSize, palette, theme } from '../utils';

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
  background: ${palette('default')(styleProps)};
  border: 1px solid ${palette('white900', { dark: 'gray700' })(styleProps)};
  border-radius: ${borderRadius('default')(styleProps)};
  color: ${palette('text')(styleProps)};
  height: 2.75em;
  width: 100%;
  padding: 0.4em 0.8em;
  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;

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
    border-color: ${palette('primary')(styleProps)};
    box-shadow: ${palette('primaryTint', { dark: 'primaryShade' })(styleProps)} 0px 0px 0px 3px !important;

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
    styleProps.state &&
    css`
      & {
        border-color: ${palette(`${styleProps.state}`)(styleProps)};
        box-shadow: ${palette(`${styleProps.state}Tint`, { dark: `${styleProps.state}Shade` })(styleProps)} 0px 0px 0px
          3px !important;
      }
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
