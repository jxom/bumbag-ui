import { css, palette } from 'bumbag';

export default {
  styles: {
    base: css`
      && {
        align-items: flex-start;
        font-size: 16px;
      }
    `,
  },
  Icon: {
    styles: {
      base: css`
        border-radius: 0px;
        box-shadow: none;
      `,
    },
    focusChecked: (styleProps) => css`
      border-color: ${palette('primary')(styleProps)};
      box-shadow: ${palette('primary')(styleProps)} 0px 0px 0px 1px !important;
    `,
  },
  Label: {
    styles: {
      base: css`
        && {
          line-height: 20px;
          font-size: 16px;
          margin-top: 2px;
        }
      `,
    },
  },
};
