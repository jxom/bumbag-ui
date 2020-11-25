import * as styles from './Modal.styles';
import { Modal as _Modal } from './Modal';
import { ModalBackdrop } from './ModalBackdrop';
import { ModalDisclosure } from './ModalDisclosure';
import { useModalState, ModalState } from './ModalState';

export * from './Modal';
export * from './ModalBackdrop';
export * from './ModalDisclosure';
export * from './ModalState';
export const Modal = Object.assign(_Modal, {
  Backdrop: ModalBackdrop,
  Disclosure: ModalDisclosure,
  useState: useModalState,
  State: ModalState,
});
export { styles as modalStyles };
