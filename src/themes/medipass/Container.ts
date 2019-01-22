import { css } from '../../styled';

export default {
  base: css`
    ${(props: any) =>
      !props.breakpoint &&
      css`
        max-width: 100%;
      `};

    @media (max-width: 768px) {
      margin: 0px;
    }
  `
};
