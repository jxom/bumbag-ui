import * as React from 'react';
import { Box as ReakitBox, DialogProps as ReakitDialogProps, useDialog as useReakitDialog } from 'reakit';

import { AnimateProps, Placement } from '../types';
import { useClassName, createComponent, createElement, createHook, merge, omitCSSProps } from '../utils';
import { Box, BoxProps } from '../Box';

import { ModalBackdrop } from './ModalBackdrop';
import { ModalContext } from './ModalState';
import * as styles from './styles';

export type LocalModalProps = {
  hideBackdrop?: boolean;
  placement?: Placement;
} & AnimateProps;
export type ModalProps = BoxProps & ReakitDialogProps & LocalModalProps;

const useProps = createHook<ModalProps>(
  (props, { themeKey, themeKeyOverride }) => {
    let {
      children,
      hideBackdrop,
      hide,
      hideOnEsc,
      hideOnClickOutside,
      modal,
      preventBodyScroll,
      visible,
      animating,
      animated,
      baseId,
      unstable_initialFocusRef,
      unstable_finalFocusRef,
      unstable_orphan,
      unstable_autoFocusOnHide,
      unstable_autoFocusOnShow,
      stopAnimation,
      ...htmlProps
    } = props;
    const modalContext = React.useContext(ModalContext);
    const modalProps = useReakitDialog(
      merge(
        {
          hide,
          hideOnEsc,
          hideOnClickOutside,
          modal,
          preventBodyScroll,
          visible,
          animating,
          animated,
          baseId,
          unstable_initialFocusRef,
          unstable_finalFocusRef,
          unstable_orphan,
          unstable_autoFocusOnHide,
          unstable_autoFocusOnShow,
          stopAnimation,
        },
        modalContext.modal
      ),
      htmlProps
    );
    htmlProps = Box.useProps({
      ...props,
      ...modalProps,
    });

    const className = useClassName({
      style: styles.Modal,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: htmlProps.className,
    });

    return {
      ...htmlProps,
      className,
      children: (
        <React.Fragment>
          {!hideBackdrop && (
            <ModalBackdrop {...omitCSSProps(props)}>
              <div />
            </ModalBackdrop>
          )}
          {children}
        </React.Fragment>
      ),
    };
  },
  {
    defaultProps: {
      placement: 'center',
    },
    themeKey: 'Modal',
  }
);

export const Modal = createComponent<ModalProps>(
  (props) => {
    const modalProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: modalProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Modal',
    },
    themeKey: 'Modal',
  }
);
