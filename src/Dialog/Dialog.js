// @flow
import React, { type Element, type Node } from 'react';

import { getUniqueId } from '../uniqueId';
import { Box } from '../primitives';
import ActionButtons, { type Props as ActionButtonsProps } from '../Button/ActionButtons';
import DialogDialog from './DialogDialog';
import DialogContent from './DialogContent';
import DialogHeader from './DialogHeader';
import DialogFooter from './DialogFooter';
import DialogTitle from './DialogTitle';
import DialogClose from './DialogClose';

type Props = {
  actionButtonsProps?: ActionButtonsProps,
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  border?: true | 'shadow',
  children: Node,
  className?: string,
  closeButtonProps?: Object,
  footer?: string | Element<any>,
  onClickClose?: Function,
  showActionButtons?: boolean,
  showCloseButton?: boolean,
  role?: ?('alertdialog' | 'dialog'),
  title?: string | Element<any>
};

const Dialog = ({
  actionButtonsProps,
  a11yDescriptionId,
  a11yTitleId,
  border,
  children,
  closeButtonProps,
  footer,
  onClickClose,
  showActionButtons,
  showCloseButton,
  role,
  title,
  ...props
}: Props) => (
  <DialogDialog a11yDescriptionId={a11yDescriptionId} a11yTitleId={a11yTitleId} role={role} border={border} {...props}>
    {title && (
      <DialogHeader>
        {typeof title === 'string' ? <DialogTitle id={a11yTitleId}>{title}</DialogTitle> : title}
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

Dialog.defaultProps = {
  actionButtonsProps: {},
  a11yDescriptionId: getUniqueId('Dialog'),
  a11yTitleId: getUniqueId('Dialog'),
  border: true,
  className: undefined,
  closeButtonProps: {},
  footer: undefined,
  onClickClose: undefined,
  showActionButtons: false,
  showCloseButton: false,
  role: 'dialog',
  title: undefined
};

export default Dialog;
