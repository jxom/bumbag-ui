import { palette, theme } from 'styled-tools';
import styled from '../styled';
import { Box } from '../primitives';

import Button from '../Button';
import Heading from '../Heading';
import Pane from '../Pane';

export const DialogContent = styled(Box)`
  padding: ${theme('fannypack.layout.spacing.small')}rem;
  max-height: 50vh;
  overflow-y: scroll;
  width: 100%;

  & {
    ${theme('fannypack.Dialog.Content.base')};
  }
`;
export const DialogHeader = styled(Box)`
  align-items: center;
  background-color: ${palette('whiteDarker')};
  display: flex;
  justify-content: space-between;
  padding: ${theme('fannypack.layout.spacing.small')}rem;
  width: 100%;

  & {
    ${theme('fannypack.Dialog.Header.base')};
  }
`;
export const DialogFooter = styled(Box)`
  display: flex;
  align-items: center;
  background-color: ${palette('whiteDarker')};
  padding: ${theme('fannypack.layout.spacing.xsmall')}rem ${theme('fannypack.layout.spacing.xsmall')}rem;
  width: 100%;

  & {
    ${theme('fannypack.Dialog.Footer.base')};
  }
`;
export const DialogTitle = styled(Heading)`
  margin-bottom: 0px;

  & {
    ${theme('fannypack.Dialog.Title.base')};
  }
`;
export const DialogClose = styled(Button)`
  height: 2em;
  width: 2em;
  padding: 0px;

  &:hover {
    background-color: ${palette('whiteDarker')};
    & {
      ${theme('fannypack.Dialog.Close.hover')};
    }
  }

  & {
    ${theme('fannypack.Dialog.Close.base')};
  }
`;

export default styled(Pane)`
  border-radius: 5px;

  &:focus {
    outline: unset;
  }

  & {
    ${theme('fannypack.Dialog.base')};
  }
`;
