import { css, palette } from 'bumbag';

export default {
  styles: {
    base: css`
      && {
        font-size: 16px;
      }
    `,
  },
  Label: {
    styles: {
      base: css`
        && {
          font-size: 16px;
        }
      `,
    },
  },
  Icon: {
    focusChecked: (styleProps) => css`
      border-color: ${palette('primary')(styleProps)};
      box-shadow: ${palette('primary')(styleProps)} 0px 0px 0px 1px !important;
    `,
  },
};
