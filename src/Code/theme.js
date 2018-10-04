import { css } from 'reakit/styled';
import { palette } from 'styled-tools';
import { darken } from 'polished';

export default ({ base: baseOverrides, inline: inlineOverrides, block: blockOverrides } = {}) => css`
  background-color: ${darken(0.05, 'white')};
  border-radius: 0.1rem;
  color: ${palette('text')};
  font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace;

  code& {
    padding: 0.1rem 0.2rem;
    ${inlineOverrides};
  }

  pre& {
    padding: 1rem;
    ${blockOverrides};
  }

  & {
    ${baseOverrides};
  }
`;
