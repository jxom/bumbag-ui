import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ActionButtonsProps, actionButtonsPropTypes } from '../Button/ActionButtons';
import { getUniqueId } from '../uniqueId';
import Dialog from '../Dialog';
import Modal, { ModalProps, LocalModalProps, modalPropTypes, modalDefaultProps } from '../Modal/Modal';
import { Omit } from '../types';

export type LocalDialogModalProps = Omit<LocalModalProps, 'children'> & {
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  actionButtonsProps?: ActionButtonsProps;
  children:
    | (({ initialFocusRef }: { initialFocusRef: React.RefObject<HTMLElement> }) => React.ReactNode)
    | React.ReactNode;
  footer?:
    | (({ initialFocusRef }: { initialFocusRef: React.RefObject<HTMLElement> }) => React.ReactNode)
    | string
    | React.ReactElement<any>;
  kind?: 'alert';
  title?: string | React.ReactElement<any>;
  type?: string;
};
export type DialogModalProps = Omit<ModalProps, 'children'> & LocalDialogModalProps;

export const DialogModal: React.FunctionComponent<LocalDialogModalProps> = ({
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
}) => (
  <Modal hide={hide} kind={kind} {...props}>
    {({ fallbackFocusRef, initialFocusRef }) => (
      <Dialog
        a11yDescriptionId={a11yDescriptionId}
        a11yTitleId={a11yTitleId}
        actionButtonsProps={{
          cancelProps: {
            elementRef: initialFocusRef,
            use: Modal.Hide,
            // @ts-ignore
            hide,
            ...(actionButtonsProps || {}).cancelProps
          },
          palette: type,
          ...actionButtonsProps
        }}
        closeButtonProps={{ elementRef: initialFocusRef }}
        elementRef={fallbackFocusRef}
        // @ts-ignore
        footer={typeof footer === 'function' ? footer({ initialFocusRef }) : footer}
        onClickClose={hide}
        role={kind === 'alert' ? 'alertdialog' : 'dialog'}
        showActionButtons={showActionButtons || kind === 'alert'}
        showCloseButton={showCloseButton && kind !== 'alert'}
        tabIndex={-1}
        // @ts-ignore
        title={title}
        type={type}
        width="100%"
      >
        {/*
         // @ts-ignore */}
        {typeof children === 'function' ? children({ initialFocusRef }) : children}
      </Dialog>
    )}
  </Modal>
);

DialogModal.propTypes = {
  ...modalPropTypes,
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  actionButtonsProps: PropTypes.shape(actionButtonsPropTypes),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  footer: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.element]),
  kind: PropTypes.oneOf(['alert']) as PropTypes.Validator<LocalDialogModalProps['kind']>,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string
};
DialogModal.defaultProps = {
  ...modalDefaultProps,
  actionButtonsProps: {},
  a11yDescriptionId: getUniqueId('Modal'),
  a11yTitleId: getUniqueId('Modal'),
  footer: undefined,
  kind: undefined,
  title: undefined,
  type: undefined,
  hideOnEsc: true,
  hideOnClickOutside: true
};

// @ts-ignore
const C: React.FunctionComponent<DialogModalProps> = DialogModal;
export default C;
