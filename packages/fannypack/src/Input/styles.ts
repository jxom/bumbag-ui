import { css, cssClass } from '../styled';
import { fontSize, palette, theme } from '../utils';

export const InputWrapper = styleProps => cssClass`
  align-items: center;
  position: relative;
  width: 100%;

  ${styleProps.size && wrapperSizeProperties(styleProps)};

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const Input = styleProps => cssClass`
  -webkit-appearance: none;
  border: 1px solid ${palette('white900')(styleProps)};
  border-radius: 0.2em;
  height: 2.5em;
  width: 100%;
  padding: 0.4em 0.6em;
  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;

  &[disabled] {
    background-color: ${palette('white700')(styleProps)};
    box-shadow: unset;
    cursor: not-allowed;

    & {
      ${theme(`${styleProps.themeKey}.disabled.base`)(styleProps)};
    }
  }

  &:focus {
    outline: unset;
    z-index: 2;
    border-color: ${palette('primary')(styleProps)};
    box-shadow: ${palette('primaryTint')(styleProps)} 0px 0px 0px 3px !important;

    & {
      ${theme(`${styleProps.themeKey}.focus.base`)(styleProps)};
    }
  }

  &::placeholder {
    opacity: 0.6;

    & {
      ${theme(`${styleProps.themeKey}.placeholder.base`)(styleProps)};
    }
  }

  ${styleProps.state &&
    css`
      & {
        border-color: ${palette(`${styleProps.state}`)(styleProps)};
        box-shadow: ${palette(`${styleProps.state}`)(styleProps)} 0px 0px 0px 1px !important;
      }
    `}

  ${(styleProps.after || styleProps.isLoading) &&
    css`
      & {
        padding-right: 2.3em;
      }
    `};

  ${styleProps.before &&
    css`
      & {
        padding-left: 2.3em;
      }
    `};

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const InputIcon = styleProps => cssClass`
  && {
    fill: ${palette('text100')(styleProps)};
    height: 2.5em;
    margin: 0 0.75em;
    top: 0;

    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const InputSpinner = styleProps => cssClass`
  && {
    font-size: inherit;
    align-items: center;
    display: flex;
    position: absolute;
    height: 2.5em;
    margin: 0 0.75em;
    top: 0;
    right: 0;
    z-index: 2;

    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export function wrapperSizeProperties(styleProps) {
  const properties = {
    small: css`
      font-size: ${fontSize('150')(styleProps)}rem;

      & {
        ${theme(`${styleProps.themeKey}.sizes.small.base`)(styleProps)};
      }
    `,
    default: css`
      & {
        ${theme(`${styleProps.themeKey}.sizes.default.base`)(styleProps)};
      }
    `,
    medium: css`
      font-size: ${fontSize('300')(styleProps)}rem;

      & {
        ${theme(`${styleProps.themeKey}.sizes.medium.base`)(styleProps)};
      }
    `,
    large: css`
      font-size: ${fontSize('400')(styleProps)}rem;

      & {
        ${theme(`${styleProps.themeKey}.sizes.large.base`)(styleProps)};
      }
    `
  };
  return properties[styleProps.size];
}
