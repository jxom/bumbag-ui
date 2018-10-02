import { css } from 'reakit/styled';
import { palette } from 'styled-tools';
import { darken } from 'polished';

export default ({ base: baseOverrides } = {}) => css`
  color: ${palette('primary')}
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip: ink edges;

  &:hover {
    color: ${props => darken(0.5, palette('primary')(props))};
  }

  & {
    ${baseOverrides};
  }
`;
