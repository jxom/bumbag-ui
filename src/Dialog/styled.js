import { palette, theme } from 'styled-tools';
import styled from '../styled';
import { Box } from '../primitives';
import Pane from '../Pane';

export const DialogContent = styled(Box)`
  padding: ${theme('fannypack.layout.spacing.small')}rem;
  max-height: 50vh;
  overflow-y: scroll;
  & {
    ${theme('fannypack.Dialog.Content.base')};
  }
`;
export const DialogHeader = styled(Box)`
  border-bottom: 1px solid ${palette('whiteDarkest')};
  padding: ${theme('fannypack.layout.spacing.small')}rem;
  width: 100%;
  & {
    ${theme('fannypack.Dialog.Header.base')};
  }
`;
export const DialogFooter = styled(Box)`
  border-top: 1px solid ${palette('whiteDarkest')};
  padding: ${theme('fannypack.layout.spacing.xsmall')}rem ${theme('fannypack.layout.spacing.xsmall')}rem;
  width: 100%;
  & {
    ${theme('fannypack.Dialog.Footer.base')};
  }
`;

export default styled(Pane)`
  border-radius: 5px;
  & {
    ${theme('fannypack.Dialog.base')};
  }
`;
