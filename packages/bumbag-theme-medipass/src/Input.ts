import { css, space } from 'bumbag';

export default {
  css: {
    root: styleProps => css`
      border-radius: 0px;
      box-shadow: none;
      height: ${space(11)(styleProps)}em;
    `
  },
  Icon: {
    css: {
      root: styleProps => css`
        height: ${space(11)(styleProps)}em;
      `
    }
  }
};
