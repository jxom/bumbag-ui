import { css } from '../../styled';

export default {
  base: css`
    ${(props: any) =>
      props.isFluid &&
      css`
        margin: 0px;
      `};
  `
};
