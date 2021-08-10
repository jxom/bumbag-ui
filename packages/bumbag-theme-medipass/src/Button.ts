import { css, palette, space } from 'bumbag';

export default {
  styles: {
    base: (styleProps) => css`
      border-radius: 0px;
      border: 2px solid ${styleProps.palette === 'default' ? palette('gray700')(styleProps) : 'transparent'};
      color: ${styleProps.palette === 'default'
        ? palette('gray700')(styleProps)
        : palette(`${styleProps.palette}Inverted`)(styleProps)};
      min-height: 44px;
      hyphens: none;
      padding: 0 ${space(4)(styleProps)}rem;
      font-size: 15px;
      text-transform: uppercase;
    `,
    outlined: (styleProps) => css`
      background-color: ${palette('white')(styleProps)};
      border-width: 2px;

      &:hover {
        background-color: ${palette(`${styleProps.palette}`)(styleProps)};
        color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
        fill: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
      }

      &:hover:active {
        border-color: ${palette(`${styleProps.palette}700`)(styleProps)};
        background-color: ${palette(`${styleProps.palette}700`)(styleProps)};
      }
    `,
    ghost: (styleProps) => css`
      border: 2px solid transparent;

      &:hover {
        color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
        fill: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
        background-color: ${palette(styleProps.palette)(styleProps)};
      }

      &:hover:active {
        color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
        fill: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
        background-color: ${palette(styleProps.palette)(styleProps)};
      }

      &:focus {
        border: 2px solid ${palette('white')(styleProps)};
        background-color: unset;
        color: ${styleProps.palette === 'default'
          ? palette('text')(styleProps)
          : palette(styleProps.palette)(styleProps)};
      }
    `,
    focus: (styleProps) => css`
      outline: 2px solid ${styleProps.palette === 'default' ? palette('gray800')(styleProps) : palette(styleProps.palette)(styleProps)};
      outline-offset: 0;
      box-shadow: none;
      border: 2px solid ${palette('white')(styleProps)};
      background-color: ${styleProps.palette === 'default'
        ? palette('gray800')(styleProps)
        : palette(`${styleProps.palette}600`)(styleProps)};
      color: ${styleProps.palette === 'default' ? 'white' : palette(`${styleProps.palette}Inverted`)(styleProps)};
    `,
    hover: (styleProps) => css`
      ${styleProps.palette === 'default' &&
      css`
        background-color: ${palette('gray700')(styleProps)};
        color: ${palette('white')(styleProps)};
      `}
    `,
    hoveractive: (styleProps) => css`
      ${styleProps.palette === 'default' &&
      css`
        background-color: ${palette('gray800')(styleProps)};
      `}
    `,
    link: css`
      border: 2px solid transparent;
      background: unset;
    `,
    sizes: {
      small: (styleProps) => css`
        height: ${space(8)(styleProps)}rem;
        font-size: 15px;
        padding: 0 ${space(4)(styleProps)}rem;
      `,
      medium: css`
        font-size: 18px;
      `,
    },
  },
};
