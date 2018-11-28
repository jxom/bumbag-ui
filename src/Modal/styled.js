import { theme } from 'styled-tools';
import Overlay from '../Overlay';
import styled from '../styled';

export const ModalHide = styled(Overlay.Hide)`
  ${theme('fannypack.Modal.Hide.base')};
`;

export const ModalShow = styled(Overlay.Show)`
  ${theme('fannypack.Modal.Show.base')};
`;

export default styled(Overlay)`
  padding: 0 1rem;
  max-width: 600px;
  width: 100%;

  ${theme('fannypack.Modal.base')};
`;
