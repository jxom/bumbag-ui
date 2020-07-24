import { css, breakpoint, palette } from 'bumbag';

export default {
  styles: {
    base: (props) => css`
      padding: 2rem;

      ${breakpoint(
        'max-tablet',
        css`
          padding-left: 1rem;
          padding-right: 1rem;
        `
      )(props)};
    `,
  },
  Wrapper: {
    styles: {
      base: (props) => css`
        background-color: ${palette('white')(props)};
        border-bottom: 1px solid ${palette('white900')(props)};
      `,
    },
  },
};
