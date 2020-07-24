import { css, breakpoint, theme } from 'bumbag';

export default {
  placement: 'top',
  defaultProps: {
    accent: 'bottom',
    variant: 'tint'
  },
  styles: {
    base: props => css`
      border-radius: 0px;
      width: 480px;

      ${breakpoint(
        'mobile',
        css`
          width: 90vw;
        `
      )(props)}
    `
  }
};
