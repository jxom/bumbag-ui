import * as React from 'react';
import {
  Box as ReakitBox,
  Dialog as ReakitDialog,
  DialogProps as ReakitDialogProps,
  useDialog as useReakitDialog
} from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalModalProps = {};
export type ModalProps = BoxProps & ReakitDialogProps & LocalModalProps;

function useProps(props: ModalProps) {
  let {
    hide,
    hideOnEsc,
    hideOnClickOutside,
    modal,
    preventBodyScroll,
    visible,
    unstable_animating,
    unstable_animated,
    unstable_hiddenId,
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
      unstable_hiddenId,
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
  htmlProps = Box.useProps({ ...props, ...modalProps });

  const className = useClassName({
    style: styles.Modal,
    styleProps: props,
    prevClassName: htmlProps.className
  });

  return { ...htmlProps, className };
}

export const Modal = createComponent<ModalProps>(
  props => {
    const modalProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: modalProps });
  },
  {
    attach: {
      defaultProps: {},
      useProps
    },
    themeKey: 'Modal'
  }
);
