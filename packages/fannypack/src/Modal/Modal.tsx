import * as React from 'react';
import { Box as ReakitBox, DialogProps as ReakitDialogProps, useDialog as useReakitDialog } from 'reakit';

import { AnimateProps, Placement } from '../types';
import { useClassName, createComponent, createElement, createHook, omitCSSProps } from '../utils';
import { Box, BoxProps } from '../Box';

import { ModalBackdrop } from './ModalBackdrop';
import * as styles from './styles';

export type LocalModalProps = {
  hideBackdrop?: boolean;
  placement?: Placement;
} & AnimateProps;
export type ModalProps = BoxProps & ReakitDialogProps & LocalModalProps;

const useProps = createHook<ModalProps>(
  (props, { themeKey, themeKeyOverride }) => {
    let {
      hideBackdrop,
      hide,
      hideOnEsc,
      hideOnClickOutside,
      modal,
      preventBodyScroll,
      visible,
      unstable_animating,
      unstable_animated,
      baseId,
      unstable_initialFocusRef,
      unstable_finalFocusRef,
      unstable_portal,
      unstable_orphan,
      unstable_autoFocusOnHide,
      unstable_autoFocusOnShow,
      unstable_stopAnimation,
      unstable_setIsMounted,
      ...htmlProps
    } = props;
    const modalProps = useReakitDialog(
      {
        hide,
        hideOnEsc,
        hideOnClickOutside,
        modal,
        preventBodyScroll,
        visible,
        unstable_animating,
        unstable_animated,
        baseId,
        unstable_initialFocusRef,
        unstable_finalFocusRef,
        unstable_portal,
        unstable_orphan,
        unstable_autoFocusOnHide,
        unstable_autoFocusOnShow,
        unstable_stopAnimation,
        unstable_setIsMounted
      },
      htmlProps
    );
    htmlProps = Box.useProps({
      ...props,
      ...modalProps,
      unstable_wrap: children => (
        <React.Fragment>
          {!hideBackdrop && (
            <ModalBackdrop {...omitCSSProps(props)}>
              <div />
            </ModalBackdrop>
          )}
          {children}
        </React.Fragment>
      )
    });

    const className = useClassName({
      style: styles.Modal,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  {
    defaultProps: {
      placement: 'center'
    },
    themeKey: 'Modal'
  }
);

export const Modal = createComponent<ModalProps>(
  props => {
    const modalProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: modalProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Modal'
  }
);
