import { css, palette } from 'bumbag';

export default {
  Sidebar: {
    styles: {
      base: (props) => css`
        color: ${palette('white')(props)};
        background-color: ${palette('primary800')(props)};
      `,
    },
  },
};
