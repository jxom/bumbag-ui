import _Code from 'reakit/Code';
import { palette, theme } from 'styled-tools';
import { darken } from 'polished';

import { CodeProps } from './Code';
import styled from '../styled';

export const Code = styled(_Code)<CodeProps>`
  background-color: ${darken(0.05, 'white')};
  border-radius: 0.1rem;
  color: ${palette('text')};
  font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace;

  code& {
    padding: 0.1rem 0.2rem;
    ${theme('fannypack.Code.inline')};
  }

  pre& {
    padding: 1rem;
    ${theme('fannypack.Code.block')};
  }

  & {
    ${theme('fannypack.Code.base')};
  }
`;

export default Code;
