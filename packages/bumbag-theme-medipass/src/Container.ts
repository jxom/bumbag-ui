import { css } from 'bumbag';

export default {
  css: {
    root: props => css`
      ${props.isFluid &&
        css`
          margin: 0px;
        `};
    `
  }
};
