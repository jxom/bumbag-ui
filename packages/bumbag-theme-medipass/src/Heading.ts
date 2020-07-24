import { css, fontWeight } from 'bumbag';

export default {
  styles: {
    base: props => css`
      font-weight: ${fontWeight('semibold')(props)};
    `
  },
  h6: {
    styles: {
      base: css`
        font-size: 1.125rem;
      `
    }
  }
};
