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
  background: ${palette('default')(styleProps)};
  border: 1px solid ${palette('white900', { dark: 'gray700' })(styleProps)};
  border-radius: ${borderRadius('default')(styleProps)};
  color: ${palette('text')(styleProps)};
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
    box-shadow: ${palette('primaryTint')(styleProps)} 0px 0px 0px 3px !important;

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
