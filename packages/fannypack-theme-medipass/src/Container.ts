import { css } from 'fannypack';

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
