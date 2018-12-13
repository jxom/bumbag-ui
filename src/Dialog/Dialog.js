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
import DialogIcon from './DialogIcon';

type Props = {
  actionButtonsProps?: ActionButtonsProps,
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  border?: true | 'shadow',
  children: Node,
  className?: string,
  closeButtonProps?: Object,
  footer?: string | Element<any>,
  kind?: ?'alert',
  onClickClose?: Function,
  showActionButtons?: boolean,
  showCloseButton?: boolean,
  title?: string | Element<any>,
  type?: string
};

const Dialog = ({
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
}: Props) => (
  <DialogDialog a11yDescriptionId={a11yDescriptionId} a11yTitleId={a11yTitleId} kind={kind} border={border} {...props}>
    {title && (
      <DialogHeader>
        {typeof title === 'string' ? (
          <DialogTitle id={a11yTitleId}>
            {type && <DialogIcon color={type} icon={type} />}
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

export default Dialog;
