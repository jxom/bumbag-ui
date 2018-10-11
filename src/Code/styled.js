import Code from 'reakit/Code';
import styled from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { darken } from 'polished';

export default styled(Code)`
  background-color: ${darken(0.05, 'white')};
  border-radius: 0.1rem;
  color: ${palette('text')};
  font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace;

  code& {
    padding: 0.1rem 0.2rem;
    ${theme('code.inline')};
  }

  pre& {
    padding: 1rem;
    ${theme('code.block')};
  }

  & {
    ${theme('code.base')};
  }
`;
