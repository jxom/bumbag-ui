import Blockquote from 'reakit/Blockquote';
import { darken } from 'polished';
import { theme } from 'styled-tools';
import styled, { space } from '../styled';
import { BlockquoteProps } from './Blockquote';

export default styled(Blockquote)<BlockquoteProps>`
  border-left: 4px solid ${darken(0.2, 'white')};
  padding: ${space(4)}rem;

  &:not(:last-child) {
    margin-bottom: ${space(4)}rem;
  }

  & {
    ${theme('fannypack.Blockquote.base')};
  }
`;
