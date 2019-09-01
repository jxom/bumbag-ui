import * as styles from './styles';
import { Modal as _Modal } from './Modal';
import { ModalDisclosure } from './ModalDisclosure';
import { useModalState } from './ModalState';

export * from './Modal';
export * from './ModalDisclosure';
export const Modal = Object.assign(_Modal, { Disclosure: ModalDisclosure, useState: useModalState });
export { styles as modalStyles };
