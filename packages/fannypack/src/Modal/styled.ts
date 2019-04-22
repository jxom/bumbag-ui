import { theme } from 'styled-tools';
import Overlay from '../Overlay';
import styled from '../styled';
import { ModalHideProps } from './ModalHide';
import { ModalShowProps } from './ModalShow';
import { ModalProps } from './Modal';

export const ModalHide = styled(Overlay.Hide)<ModalHideProps>`
  ${theme('fannypack.Modal.Hide.base')};
`;

export const ModalShow = styled(Overlay.Show)<ModalShowProps>`
  ${theme('fannypack.Modal.Show.base')};
`;

export const Modal = styled(Overlay)<ModalProps>`
  padding: 0 1rem;
  max-width: 600px;
  width: 100%;

  ${theme('fannypack.Modal.base')};
`;

export default Modal;
