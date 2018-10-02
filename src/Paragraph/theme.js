import { css } from 'reakit/styled';

export default ({ base: baseOverrides } = {}) => css`
  &:not(:last-child) {
    margin: 0 0 1rem;
  }

  & {
    ${baseOverrides};
  }
`;
