import * as React from 'react';

// @ts-ignore
import { getUniqueId } from '../uniqueId';
import { Box } from '../primitives';
import { Omit } from '../types';
import ActionButtons, { ActionButtonsProps } from '../Button/ActionButtons';
import { ButtonProps } from '../Button/Button';
import DialogDialog, { DialogDialogProps } from './DialogDialog';
import DialogContent, { DialogContentProps } from './DialogContent';
import DialogHeader, { DialogHeaderProps } from './DialogHeader';
import DialogFooter, { DialogFooterProps } from './DialogFooter';
import DialogTitle, { DialogTitleProps } from './DialogTitle';
import DialogClose, { DialogCloseProps } from './DialogClose';
import DialogIcon, { DialogIconProps } from './DialogIcon';

export type LocalDialogProps = {
  actionButtonsProps?: ActionButtonsProps;
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  border?: true | 'shadow';
  children: React.ReactNode;
  className?: string;
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  footer?: string | React.ReactElement<any>;
  kind?: 'alert' | undefined;
  onClickClose?: () => void;
  showActionButtons?: boolean;
  showCloseButton?: boolean;
  title?: string | React.ReactElement<any>;
  type?: string;
};
export type DialogProps = LocalDialogProps & DialogDialogProps;
export type DialogComponents = {
  Dialog: React.FunctionComponent<DialogDialogProps>;
  Content: React.FunctionComponent<DialogContentProps>;
  Header: React.FunctionComponent<DialogHeaderProps>;
  Footer: React.FunctionComponent<DialogFooterProps>;
  Title: React.FunctionComponent<DialogTitleProps>;
  Close: React.FunctionComponent<DialogCloseProps>;
  Icon: React.FunctionComponent<DialogIconProps>;
};

export const Dialog: React.FunctionComponent<LocalDialogProps> & DialogComponents = ({
  actionButtonsProps,
  a11yDescriptionId,
  a11yTitleId,
  border,
  children,
  closeButtonProps,
  footer,
  kind,
  onClickClose,
  showActionButtons,
  showCloseButton,
  title,
  type,
  ...props
}) => (
  <DialogDialog a11yDescriptionId={a11yDescriptionId} a11yTitleId={a11yTitleId} kind={kind} border={border} {...props}>
    {title && (
      <DialogHeader>
        {typeof title === 'string' ? (
          <DialogTitle id={a11yTitleId}>
            {type && <DialogIcon a11yHidden color={type} icon={type} />}
            {title}
          </DialogTitle>
        ) : (
          title
        )}
        {showCloseButton && <DialogClose onClick={onClickClose} {...closeButtonProps} />}
      </DialogHeader>
    )}
    <DialogContent id={a11yDescriptionId}>{children}</DialogContent>
    {(footer || showActionButtons) && (
      <DialogFooter justifyContent={footer ? 'space-between' : 'flex-end'}>
        {footer && <Box>{footer}</Box>}
        {showActionButtons && (
          <Box>
            <ActionButtons {...actionButtonsProps} />
          </Box>
        )}
      </DialogFooter>
    )}
  </DialogDialog>
);

Dialog.Dialog = DialogDialog;
Dialog.Header = DialogHeader;
Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;
Dialog.Title = DialogTitle;
Dialog.Close = DialogClose;
Dialog.Icon = DialogIcon;

Dialog.defaultProps = {
  actionButtonsProps: {},
  a11yDescriptionId: getUniqueId('Dialog'),
  a11yTitleId: getUniqueId('Dialog'),
  border: true,
  className: undefined,
  closeButtonProps: {},
  footer: undefined,
  kind: undefined,
  onClickClose: undefined,
  showActionButtons: false,
  showCloseButton: false,
  title: undefined,
  type: undefined
};

// @ts-ignore
const C: React.FunctionComponent<DialogProps> & DialogComponents = Dialog;
export default C;
