// @flow
import React, { Fragment, type Node } from 'react';
import Portal from 'reakit/Portal';

import Backdrop from '../Backdrop';
import TrapFocus from '../_utils/TrapFocus';
import ModalContainer from './ModalContainer';
import _Modal, { ModalHide, ModalShow } from './styled';

type Props = {
  children: Node | Function,
  className?: string,
  /** Delay of the animation if one is specified. */
  delay?: string,
  /** Duration of the animation if one is specified. */
  duration?: string,
  /** Will the modal have an expand animation when it is toggled on/off? */
  expand?: boolean | string,
  /** Will the modal have a fade animation when it is toggled on/off? */
  fade?: boolean,
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
  timing?: string
};

const Modal = ({
  children,
  delay,
  duration,
  fade,
  hide,
  hideOnEsc,
  hideOnClickOutside,
  isVisible,
  kind,
  showActionButtons,
  showCloseButton,
  ...props
}: Props) => (
  <Portal>
    <TrapFocus isActive={isVisible} usesPortal>
      {({ fallbackFocusRef, initialFocusRef }) => (
        <Fragment>
          <Backdrop
            delay={delay}
            duration={duration}
            expand={undefined}
            hide={hideOnClickOutside && kind !== 'alert' ? hide : undefined}
            fade={fade}
            hideOnEsc={kind === 'alert' ? false : hideOnEsc}
            isVisible={isVisible}
            slide={undefined}
            use={hideOnClickOutside && kind !== 'alert' ? ModalHide : undefined}
          />
          <_Modal
            aria-modal="true"
            delay={delay}
            duration={duration}
            fade={fade}
            hideOnEsc={kind === 'alert' ? false : hideOnEsc}
            hideOnClickOutside={kind === 'alert' ? false : hideOnClickOutside}
            isVisible={isVisible}
            {...props}
          >
            {typeof children === 'function' ? children({ fallbackFocusRef, initialFocusRef }) : children}
          </_Modal>
        </Fragment>
      )}
    </TrapFocus>
  </Portal>
);

Modal.defaultProps = {
  className: undefined,
  delay: undefined,
  duration: '250ms',
  expand: undefined,
  fade: false,
  hideOnEsc: true,
  hideOnClickOutside: true,
  isVisible: false,
  kind: undefined,
  showActionButtons: false,
  showCloseButton: false,
  slide: false,
  timing: 'ease-in-out'
};

Modal.Container = ModalContainer;
Modal.Hide = ModalHide;
Modal.Show = ModalShow;

export default Modal;
