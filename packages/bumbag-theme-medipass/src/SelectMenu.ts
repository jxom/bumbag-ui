import { css, palette, space } from 'bumbag';

export default {
  Button: {
    styles: {
      base: (styleProps) => css`
        &&[aria-expanded='true'],
        &&:focus {
          border-color: ${palette('primary')(styleProps)};
          box-shadow: ${palette('primary')(styleProps)} 0px 0px 0px 1px !important;
        }

        ${styleProps.state &&
        css`
          & {
            border-color: ${palette(styleProps.state)(styleProps)};
            box-shadow: ${palette(styleProps.state)(styleProps)} 0px 0px 0px 1px !important;
          }
        `};
      `,
    },
  },
  Icon: {
    styles: {
      base: (styleProps) => css`
        height: ${space(11)(styleProps)}em;
      `,
    },
  },
};
