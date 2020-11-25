import { css, cssClass } from '../styled';
import { borderRadius, fontSize, palette, lineHeight, theme } from '../utils';

export const Select = (styleProps) => cssClass`
  appearance: none;
  background: linear-gradient(${palette('default')(styleProps)}, ${palette('white600', { dark: 'gray900' })(
  styleProps
)});
  border: 1px solid ${palette('white900', { dark: 'gray700' })(styleProps)};
  border-radius: ${borderRadius('default')(styleProps)};
  color: ${styleProps.isPlaceholderSelected ? palette('gray300')(styleProps) : palette('text')(styleProps)};
  height: 2.75em;
  padding: 0.4em 2em 0.4em 0.8em;
  line-height: ${lineHeight('default')(styleProps)};
  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;

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
    border-color: ${palette('primary')(styleProps)};
    box-shadow: ${palette('primaryTint', { dark: 'primaryShade' })(styleProps)} 0px 0px 0px 3px !important;
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

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const SelectWrapper = (styleProps) => cssClass`
  align-items: center;
  position: relative;
  width: fit-content;

  ${styleProps.size && wrapperSizeProperties(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

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
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

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

export const SelectField = (styleProps) => cssClass`
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
