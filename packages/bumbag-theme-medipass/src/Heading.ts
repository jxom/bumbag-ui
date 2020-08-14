import { css, fontWeight } from 'bumbag';

export default {
  styles: {
    base: (props) => css`
      font-weight: ${fontWeight('semibold')(props)};
    `,
  },
  h6: {
    fontSize: '250',
  },
};
