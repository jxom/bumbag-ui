// @flow
import React, { type Element, type Node } from 'react';

import _Dialog from './styled';
import DialogContent from './DialogContent';
import DialogHeader from './DialogHeader';
import DialogFooter from './DialogFooter';
import DialogTitle from './DialogTitle';
import DialogClose from './DialogClose';

type Props = {
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  border?: true | 'shadow',
  children: Node,
  className?: string,
  footer?: string | Element<any>,
  onClickClose?: Function,
  showCloseButton?: boolean,
  title?: string | Element<any>
};

const Dialog = ({
  a11yDescriptionId,
  a11yTitleId,
  border,
  children,
  footer,
  onClickClose,
  showCloseButton,
  title,
  ...props
}: Props) => (
  <_Dialog aria-describedby={a11yDescriptionId} aria-labelledby={a11yTitleId} role="dialog" border={border} {...props}>
    {title && (
      <DialogHeader>
        {typeof title === 'string' ? <DialogTitle id={a11yTitleId}>{title}</DialogTitle> : title}
        {showCloseButton && <DialogClose onClick={onClickClose} />}
      </DialogHeader>
    )}
    <DialogContent id={a11yDescriptionId}>{children}</DialogContent>
    {footer && <DialogFooter>{footer}</DialogFooter>}
  </_Dialog>
);

Dialog.Header = DialogHeader;
Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;
Dialog.Title = DialogTitle;
Dialog.Close = DialogClose;

Dialog.defaultProps = {
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  border: true,
  className: undefined,
  footer: undefined,
  onClickClose: undefined,
  showCloseButton: false,
  title: undefined
};

export default Dialog;
