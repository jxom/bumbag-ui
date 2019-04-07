import { palette, theme } from 'styled-tools';

import styled, { space } from '../styled';
import { Box } from '../primitives';
import Button from '../Button';
// @ts-ignore
import Heading from '../Heading';
import Icon from '../Icon/Icon';
import Pane from '../Pane';

import { DialogContentProps } from './DialogContent';
import { DialogCloseProps } from './DialogClose';
import { DialogDialogProps } from './DialogDialog';
import { DialogFooterProps } from './DialogFooter';
import { DialogHeaderProps } from './DialogHeader';
import { DialogIconProps } from './DialogIcon';

export const DialogContent = styled(Box)<DialogContentProps>`
  padding: ${space(5)}rem;
  max-height: 50vh;
  overflow-y: ${props => (props.hasScroll ? 'scroll' : 'visible')};
  width: 100%;

  & {
    ${theme('fannypack.Dialog.Content.base')};
  }
`;
export const DialogHeader = styled(Box)<DialogHeaderProps>`
  align-items: center;
  background-color: ${palette('white700')};
  display: flex;
  justify-content: space-between;
  padding: ${space(5)}rem;
  width: 100%;

  & {
    ${theme('fannypack.Dialog.Header.base')};
  }
`;
export const DialogFooter = styled(Box)<DialogFooterProps>`
  display: flex;
  align-items: center;
  background-color: ${palette('white700')};
  padding: ${space(4)}rem ${space(4)}rem;
  width: 100%;

  & {
    ${theme('fannypack.Dialog.Footer.base')};
  }
`;
export const DialogTitle = styled(Heading)`
  && {
    margin-bottom: 0px;
  }

  & {
    ${theme('fannypack.Dialog.Title.base')};
  }
`;
export const DialogClose = styled(Button)<DialogCloseProps>`
  min-height: 1.5em;
  width: 1.5em;
  padding: 0px;

  &:hover {
    background-color: ${palette('white700')};
    & {
      ${theme('fannypack.Dialog.Close.hover')};
    }
  }

  & {
    ${theme('fannypack.Dialog.Close.base')};
  }
`;

export const DialogIcon = styled(Icon)<DialogIconProps>`
  margin-right: ${space(2)}rem;

  & {
    ${theme('fannypack.Dialog.Icon.base')};
  }
`;

export const Dialog = styled(Pane)<DialogDialogProps>`
  border-radius: 5px;

  &:focus {
    outline: unset;
  }

  & {
    ${theme('fannypack.Dialog.base')};
  }
`;

export default Dialog;
