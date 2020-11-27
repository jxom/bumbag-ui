import { css, palette, space } from 'bumbag';

export default {
  styles: {
    base: (styleProps) => css`
      border-radius: 0px;
      border: 1px solid ${palette('gray100')(styleProps)};
      box-shadow: none;
      height: ${space(11)(styleProps)}em;

      ${styleProps.state &&
      css`
        & {
          border-color: ${palette(styleProps.state)(styleProps)};
          box-shadow: ${palette(styleProps.state)(styleProps)} 0px 0px 0px 1px !important;
        }
      `};
    `,
    focus: (styleProps) => css`
      border-color: ${palette('primary')(styleProps)};
      box-shadow: ${palette('primary')(styleProps)} 0px 0px 0px 1px !important;
    `,
  },
  Icon: {
    styles: {
      base: (styleProps) => css`
        height: ${space(11)(styleProps)}em;
      `,
    },
  },
};
