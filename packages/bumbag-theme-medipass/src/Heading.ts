import { css, fontWeight, space } from 'bumbag';

export default {
  styles: {
    base: (props) => css`
      font-weight: ${fontWeight('semibold')(props)};

      &&&:not(:last-child) {
        margin-bottom: ${space(5, 'minor')(props)}rem;
      }
    `,
  },
  h6: {
    fontSize: '250',
  },
};
