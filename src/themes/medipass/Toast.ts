import { css, theme } from '../../styled';

export default {
  placement: 'top',
  defaultProps: {
    hasTint: true,
    showCloseButton: true,
    hasHorizontalBar: true
  },
  base: css`
    width: 480px;

    @media screen and (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      width: 90vw;
    }
  `,
  Title: {
    base: css`
      && {
        font-size: 1rem;
      }
    `
  }
};
