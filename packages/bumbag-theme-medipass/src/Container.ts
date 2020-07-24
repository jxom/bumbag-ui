import { css } from 'bumbag';

export default {
  styles: {
    base: props => css`
      ${props.isFluid &&
        css`
          margin: 0px;
        `};
    `
  }
};
