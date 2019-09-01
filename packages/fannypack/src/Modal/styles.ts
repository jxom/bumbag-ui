import { css, cssClass } from '../styled';
import { space, theme } from '../utils';

export const Modal = styleProps => cssClass`
  position: fixed;
  z-index: 19900410;
  left: 50%;
  top: 50%;

  & {
    ${theme('Modal.base')(styleProps)};
  }
`;

export const ModalDisclosure = styleProps => cssClass`
  & {
    ${theme('Modal.Disclosure.base')(styleProps)};
  }
`;
