import { css, space } from 'bumbag';

export default {
  css: {
    root: css`
      border-radius: 30px;
      text-transform: uppercase;
    `
  },
  Content: {
    css: {
      root: props => css`
        padding: 0 ${space(3)(props)}em;
      `
    }
  },
  Close: {
    css: {
      root: props => css`
        border-radius: 30px;

        &:focus {
          outline: none;
        }
      `
    }
  }
};
