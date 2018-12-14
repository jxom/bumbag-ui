import { palette, theme } from 'styled-tools';

import styled from '../styled';
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
  padding: ${theme('fannypack.layout.spacing.small')}rem;
  max-height: 50vh;
  overflow-y: scroll;
  width: 100%;

  & {
    ${theme('fannypack.Dialog.Content.base')};
  }
`;
export const DialogHeader = styled(Box)<DialogHeaderProps>`
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
export const DialogFooter = styled(Box)<DialogFooterProps>`
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
export const DialogClose = styled(Button)<DialogCloseProps>`
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

export const DialogIcon = styled(Icon)<DialogIconProps>`
  margin-right: ${theme('fannypack.layout.spacing.xxsmall')}rem;

  & {
    ${theme('fannypack.Dialog.Icon.base')};
  }
`;

export default styled(Pane)<DialogDialogProps>`
  border-radius: 5px;

  &:focus {
    outline: unset;
  }

  & {
    ${theme('fannypack.Dialog.base')};
  }
`;
