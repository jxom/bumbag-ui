import { css, palette } from 'bumbag';

export default {
  styles: {
    base: (props) => css`
      color: ${palette('text200')(props)};
    `,
  },
  Head: {
    styles: {
      base: css`
        background-color: rgba(0, 0, 0, 0.05);
      `,
    },
  },
  Cell: {
    styles: {
      base: css`
        padding: 1rem;
        vertical-align: middle;
      `,
    },
  },
  HeadCell: {
    styles: {
      base: (props) => css`
        color: ${palette('text100')(props)};
        font-size: 12px;
        line-height: 2;
        margin-bottom: 0px;
        text-transform: uppercase;
      `,
    },
  },
};
