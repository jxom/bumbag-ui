import { css, palette } from 'bumbag';

export default {
  styles: {
    base: (styleProps) => css`
      border-radius: 0px;
      border: 1px solid ${palette('gray100')(styleProps)};
      box-shadow: none;

      ${styleProps.state &&
      css`
        & {
          border-color: ${palette(styleProps.state)(styleProps)};
          box-shadow: ${palette(styleProps.state)(styleProps)} 0px 0px 0px 1px !important;
        }
      `};

      &&:focus {
        border-color: ${palette('primary')(styleProps)};
        box-shadow: ${palette('primary')(styleProps)} 0px 0px 0px 1px !important;
      }
    `,
  },
};
