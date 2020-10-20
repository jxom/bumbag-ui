import { css, space } from 'bumbag';

export default {
  Wrapper: {
    styles: {
      base: css`
        padding: ${space(2, 'major')}rem;
      `,
    },
  },
  defaultProps: {
    accent: true,
    variant: 'bordered',
  },
};
