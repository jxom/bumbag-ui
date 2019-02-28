import { css } from '../../styled';

export default {
  placement: 'top',
  defaultProps: {
    hasTint: true,
    showCloseButton: true,
    hasHorizontalBar: true
  },
  base: css`
    width: unset;
    max-width: 480px;
  `,
  Title: {
    base: css`
      && {
        font-size: 1rem;
      }
    `
  }
};
