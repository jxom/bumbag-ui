import { css } from 'reakit/styled';
import { darken } from 'polished';

export default ({ base: baseOverrides } = {}) => css`
  border-left: 4px solid ${darken(0.2, 'white')};
  padding: 1rem;

  & {
    ${baseOverrides};
  }
`;
