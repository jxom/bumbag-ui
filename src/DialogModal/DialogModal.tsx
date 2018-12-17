import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ActionButtonsProps } from '../Button/ActionButtons';
import { getUniqueId } from '../uniqueId';
import Dialog from '../Dialog';
import Modal, { ModalProps, LocalModalProps } from '../Modal/Modal';
import {
  Omit,
  AnimateProps,
  animateDefaultProps,
  animatePropTypes,
  RestrictHideProps,
  restrictDefaultProps,
  restrictHidePropTypes
} from '../types';

export type LocalDialogModalProps = AnimateProps &
  RestrictHideProps &
  Omit<LocalModalProps, 'children'> & {
    a11yDescriptionId?: string;
    a11yTitleId?: string;
    actionButtonsProps?: ActionButtonsProps;
    children:
      | (({ initialFocusRef }: { initialFocusRef: React.RefObject<HTMLElement> }) => React.ReactNode)
      | React.ReactNode;
    className?: string;
    footer?:
      | (({ initialFocusRef }: { initialFocusRef: React.RefObject<HTMLElement> }) => React.ReactNode)
      | string
      | React.ReactElement<any>;
    hide?(): void;
    /** Whether or not to show the modal component */
    isVisible?: boolean;
    kind?: 'alert';
    showActionButtons?: boolean;
    showCloseButton?: boolean;
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
            palette: type,
            ...(actionButtonsProps || {}).cancelProps
          },
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
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  actionButtonsProps: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  className: PropTypes.string,
  footer: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.element]),
  hide: PropTypes.func,
  isVisible: PropTypes.bool,
  kind: PropTypes.oneOf(['alert']) as PropTypes.Validator<LocalDialogModalProps['kind']>,
  showActionButtons: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
  ...animatePropTypes,
  ...restrictHidePropTypes
};
DialogModal.defaultProps = {
  actionButtonsProps: {},
  a11yDescriptionId: getUniqueId('Modal'),
  a11yTitleId: getUniqueId('Modal'),
  className: undefined,
  footer: undefined,
  isVisible: false,
  kind: undefined,
  showActionButtons: false,
  showCloseButton: false,
  title: undefined,
  type: undefined,
  ...animateDefaultProps,
  ...restrictDefaultProps,
  hideOnEsc: true,
  hideOnClickOutside: true
};

// @ts-ignore
const C: React.FunctionComponent<DialogModalProps> = DialogModal;
export default C;
