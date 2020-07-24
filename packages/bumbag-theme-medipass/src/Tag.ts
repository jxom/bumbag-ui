import { css, space } from 'bumbag';

export default {
  styles: {
    base: css`
      border-radius: 30px;
      text-transform: uppercase;
    `
  },
  Content: {
    styles: {
      base: props => css`
        padding: 0 ${space(3)(props)}em;
      `
    }
  },
  Close: {
    styles: {
      base: props => css`
        border-radius: 30px;

        &:focus {
          outline: none;
        }
      `
    }
  }
};
