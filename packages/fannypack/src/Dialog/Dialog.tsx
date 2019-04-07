import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _omit from 'lodash/omit';

// @ts-ignore
import { getUniqueId } from '../uniqueId';
import { Box } from '../primitives';
import { Omit } from '../types';
import ActionButtons, { ActionButtonsProps, actionButtonsPropTypes } from '../Button/ActionButtons';
import { ButtonProps, buttonPropTypes } from '../Button/Button';
import DialogDialog, {
  DialogDialogProps,
  LocalDialogDialogProps,
  dialogDialogPropTypes,
  dialogDialogDefaultProps
} from './DialogDialog';
import DialogContent, { DialogContentProps } from './DialogContent';
import DialogHeader, { DialogHeaderProps } from './DialogHeader';
import DialogFooter, { DialogFooterProps } from './DialogFooter';
import DialogTitle, { DialogTitleProps } from './DialogTitle';
import DialogClose, { DialogCloseProps } from './DialogClose';
import DialogIcon, { DialogIconProps } from './DialogIcon';

export type LocalDialogProps = LocalDialogDialogProps & {
  actionButtonsProps?: ActionButtonsProps;
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  children: React.ReactNode;
  className?: string;
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  footer?: string | React.ReactElement<any>;
  hasScroll?: boolean;
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
  children,
  closeButtonProps,
  footer,
  hasScroll,
  onClickClose,
  showActionButtons,
  showCloseButton,
  title,
  type,
  ...props
}) => (
  <DialogDialog a11yDescriptionId={a11yDescriptionId} a11yTitleId={a11yTitleId} {...props}>
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
    <DialogContent id={a11yDescriptionId} hasScroll={hasScroll}>
      {children}
    </DialogContent>
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

export const dialogPropTypes = {
  actionButtonsProps: PropTypes.shape(actionButtonsPropTypes),
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  closeButtonProps: PropTypes.shape(_omit(buttonPropTypes, 'children')),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  hasScroll: PropTypes.bool,
  onClickClose: PropTypes.func,
  showActionButtons: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
  ...dialogDialogPropTypes
};
Dialog.propTypes = dialogPropTypes;

export const dialogDefaultProps = {
  ...dialogDialogDefaultProps,
  actionButtonsProps: {},
  a11yDescriptionId: getUniqueId('Dialog'),
  a11yTitleId: getUniqueId('Dialog'),
  className: undefined,
  closeButtonProps: {},
  footer: undefined,
  hasScroll: false,
  onClickClose: undefined,
  showActionButtons: false,
  showCloseButton: false,
  title: undefined,
  type: undefined
};
Dialog.defaultProps = dialogDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<DialogProps> & DialogComponents = Dialog;
export default C;
