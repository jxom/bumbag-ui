import { css } from '../../styled';

export default {
  placement: 'top',
  defaultProps: {
    hasTint: true,
    showCloseButton: true,
    hasHorizontalBar: true
  },
  Title: {
    base: css`
      && {
        font-size: 1rem;
      }
    `
  }
};
