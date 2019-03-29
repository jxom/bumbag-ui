import * as React from 'react';
import * as PropTypes from 'prop-types';

import { isFunction } from '../_utils/assert';
import TrapFocus from '../_utils/TrapFocus';
import Backdrop from '../Backdrop';
import { OverlayProps } from '../Overlay/Overlay';
import Portal from '../Portal';
import ModalContainer, { ModalContainerProps } from './ModalContainer';
import ModalHide, { ModalHideProps } from './ModalHide';
import ModalShow, { ModalShowProps } from './ModalShow';
import _Modal from './styled';
import {
  AnimateProps,
  animatePropTypes,
  animateDefaultProps,
  RestrictHideProps,
  restrictDefaultProps,
  restrictHidePropTypes
} from '../types';

export type LocalModalProps = {
  children:
    | React.ReactNode
    | (({
        fallbackFocusRef,
        initialFocusRef
      }: {
        fallbackFocusRef: React.RefObject<HTMLElement>;
        initialFocusRef: React.RefObject<HTMLElement>;
      }) => React.ReactNode);
  className?: string;
  /** Whether or not to show the modal component */
  isVisible?: boolean;
  hide?(): void;
  kind?: 'alert' | void;
  renderWrapper?(children: React.ReactNode): React.ReactNode;
  showActionButtons?: boolean;
  showCloseButton?: boolean;
} & RestrictHideProps &
  AnimateProps;
export type ModalProps = OverlayProps & LocalModalProps;
export type ModalComponents = {
  Container: React.FunctionComponent<ModalContainerProps>;
  Hide: React.FunctionComponent<ModalHideProps>;
  Show: React.FunctionComponent<ModalShowProps>;
};

export const Modal: React.FunctionComponent<LocalModalProps> & ModalComponents = ({
  children,
  delay,
  duration,
  fade,
  hide,
  hideOnEsc,
  hideOnClickOutside,
  isVisible,
  kind,
  renderWrapper = children => children,
  showActionButtons,
  showCloseButton,
  ...props
}) => {
  return (
    <Portal>
      <TrapFocus isActive={isVisible} usesPortal>
        {({ fallbackFocusRef, initialFocusRef }) => (
          <React.Fragment>
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
              {renderWrapper(isFunction(children) ? children({ fallbackFocusRef, initialFocusRef }) : children)}
            </_Modal>
          </React.Fragment>
        )}
      </TrapFocus>
    </Portal>
  );
};

export const modalPropTypes = {
  ...animatePropTypes,
  ...restrictHidePropTypes,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  hide: PropTypes.func,
  kind: PropTypes.oneOf(['alert']) as PropTypes.Validator<LocalModalProps['kind']>,
  showActionButtons: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  renderWrapper: PropTypes.func
};
Modal.propTypes = modalPropTypes;

export const modalDefaultProps = {
  ...animateDefaultProps,
  ...restrictDefaultProps,
  className: undefined,
  isVisible: false,
  kind: undefined,
  showActionButtons: false,
  showCloseButton: false,
  hideOnClickOutside: true,
  hideOnEsc: true,
  renderWrapper: (children: React.ReactNode) => children
};
Modal.defaultProps = modalDefaultProps;

Modal.Container = ModalContainer;
Modal.Hide = ModalHide;
Modal.Show = ModalShow;

const C: React.FunctionComponent<ModalProps> & ModalComponents = Modal;
export default C;
