// @flow
import React, { type Node, type Element } from 'react';

import { getUniqueId } from '../uniqueId';
import { type Props as ActionButtonsProps } from '../Button/ActionButtons';
import Dialog from '../Dialog';
import Modal from '../Modal';

type Props = {
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  actionButtonsProps?: ActionButtonsProps,
  children: Node,
  className?: string,
  /** Delay of the animation if one is specified. */
  delay?: string,
  /** Duration of the animation if one is specified. */
  duration?: string,
  /** Will the modal have an expand animation when it is toggled on/off? */
  expand?: boolean | string,
  /** Will the modal have a fade animation when it is toggled on/off? */
  fade?: boolean,
  footer?: string | Element<any> | Function,
  hide: Function,
  /** Should the modal be hidden when 'esc' is clicked? */
  hideOnEsc?: boolean,
  /** Should the modal be hidden when the outside has been clicked? */
  hideOnClickOutside?: boolean,
  /** Whether or not to show the modal component */
  isVisible?: boolean,
  kind?: ?'alert',
  showActionButtons?: boolean,
  showCloseButton?: boolean,
  /** Will the modal have a slide animation when it is toggled on/off? */
  slide?: boolean | string,
  /** Timing of the animation */
  timing?: string,
  title?: string | Element<any>,
  type?: string
};

const DialogModal = ({
  a11yDescriptionId,
  a11yTitleId,
  actionButtonsProps,
  children,
  footer,
  hide,
  kind,
  showActionButtons,
  showCloseButton,
  title,
  type,
  ...props
}: Props) => (
  <Modal a11yDescriptionId={a11yDescriptionId} a11yTitleId={a11yTitleId} hide={hide} kind={kind} {...props}>
    {({ fallbackFocusRef, initialFocusRef }) => (
      <Dialog
        a11yDescriptionId={a11yDescriptionId}
        a11yTitleId={a11yTitleId}
        actionButtonsProps={{
          cancelProps: {
            elementRef: initialFocusRef,
            use: Modal.Hide,
            hide,
            ...(actionButtonsProps || {}).cancelProps
          },
          palette: type,
          ...actionButtonsProps
        }}
        closeButtonProps={{ elementRef: initialFocusRef }}
        elementRef={fallbackFocusRef}
        footer={typeof footer === 'function' ? footer({ initialFocusRef }) : footer}
        onClickClose={hide}
        role={kind === 'alert' ? 'alertdialog' : 'dialog'}
        showActionButtons={showActionButtons || kind === 'alert'}
        showCloseButton={showCloseButton && kind !== 'alert'}
        tabIndex="-1"
        title={title}
        type={type}
        width="100%"
      >
        {typeof children === 'function' ? children({ initialFocusRef }) : children}
      </Dialog>
    )}
  </Modal>
);

DialogModal.defaultProps = {
  actionButtonsProps: {},
  a11yDescriptionId: getUniqueId('Modal'),
  a11yTitleId: getUniqueId('Modal'),
  className: undefined,
  delay: undefined,
  duration: '250ms',
  expand: undefined,
  fade: false,
  footer: undefined,
  hideOnEsc: true,
  hideOnClickOutside: true,
  isVisible: false,
  kind: undefined,
  showActionButtons: false,
  showCloseButton: false,
  slide: false,
  timing: 'ease-in-out',
  title: undefined,
  type: undefined
};

export default DialogModal;
