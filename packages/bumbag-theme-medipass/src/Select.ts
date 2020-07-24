import { css, space } from 'bumbag';

export default {
  styles: {
    base: styleProps => css`
      border-radius: 0px;
      box-shadow: none;
      height: ${space(11)(styleProps)}em;
    `
  },
  Icon: {
    styles: {
      base: styleProps => css`
        height: ${space(11)(styleProps)}em;
      `
    }
  }
};
