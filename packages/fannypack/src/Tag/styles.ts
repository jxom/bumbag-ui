import { cssClass, css } from '../styled';
import { borderRadius, darken, fontSize, fontWeight, palette, space, theme } from '../utils';

export const Tag = (styleProps) => cssClass`
  align-items: center;
  background-color: ${palette(styleProps.palette)(styleProps)};
  border-radius: ${borderRadius('default')(styleProps)};
  color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
  display: inline-flex;
  fill: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
  font-size: ${fontSize('100')(styleProps)}rem;
  font-weight: ${fontWeight('semibold')(styleProps)};
  height: 1.5rem;
  justify-content: center;

  ${styleProps.variant === 'outlined' && outlinedProperties(styleProps)}
  ${styleProps.size && sizeProperties(styleProps)}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TagContent = (styleProps) => cssClass`
  align-items: center;
  display: flex;
  height: inherit;
  padding: 0 ${space(3)(styleProps)}em;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TagClose = (styleProps) => cssClass`
  &&& {
    background-color: ${palette(styleProps.palette)(styleProps)};
    color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
    fill: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
    height: 1.5em;
    padding: 0 ${space(1)(styleProps)}em;
    margin-right: ${space(1)(styleProps)}em;
    margin-left: -${space(1)(styleProps)}em;

    &:hover {
      background-color: ${darken(0.1, styleProps.palette)(styleProps)};
    }

    &:focus {
      box-shadow: unset;
    }

    ${
      styleProps.variant === 'outlined' &&
      css`
        background-color: unset;
        color: ${palette(styleProps.palette)(styleProps)};

        &:hover {
          background-color: ${palette('white700')(styleProps)};
        }
      `
    }

    & {
      ${theme(styleProps.themeKey, `css.root`)(styleProps)};
    }
  }
`;

export const outlinedProperties = (styleProps) => cssClass`
  & {
    background-color: unset;
    border: 1px solid ${palette(styleProps.palette)(styleProps)};
    color: ${palette(styleProps.palette)(styleProps)};
    fill: ${palette(styleProps.palette)(styleProps)};
  }
  & {
    ${theme(styleProps.themeKey, `css.outlined`)(styleProps)};
  }
`;

export const sizeProperties = (styleProps) => {
  const sizes = {
    default: cssClass`
    & {
      ${theme(styleProps.themeKey, `css.sizes.default`)(styleProps)};
    }
  `,
    medium: cssClass`
    font-size: 1em;
    height: 2rem;
    & {
      ${theme(styleProps.themeKey, `css.sizes.medium`)(styleProps)};
    }
  `,
    large: cssClass`
    font-size: 1.25em;
    height: 2.5rem;
    & {
      ${theme(styleProps.themeKey, `css.sizes.large`)(styleProps)};
    }
  `,
  };
  return sizes[styleProps.size];
};
