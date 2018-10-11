import Blockquote from 'reakit/Blockquote';
import styled from 'reakit/styled';
import { darken } from 'polished';
import { theme } from 'styled-tools';

export default styled(Blockquote)`
  border-left: 4px solid ${darken(0.2, 'white')};
  padding: 1rem;

  & {
    ${theme('blockquote.base')};
  }
`;
