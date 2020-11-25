import * as React from 'react';
import {
  Box as ReakitBox,
  DialogBackdropProps as ReakitDialogBackdropProps,
  useDialogBackdrop as useReakitDialogBackdrop,
} from 'reakit';

import { useClassName, createComponent, createElement, createHook, merge } from '../utils';
import { Box, BoxProps } from '../Box';

import { ModalContext } from './ModalState';
import * as styles from './Modal.styles';

export type LocalModalBackdropProps = {};
export type ModalBackdropProps = BoxProps & ReakitDialogBackdropProps & LocalModalBackdropProps;

const useProps = createHook<ModalBackdropProps>(
  (props, { themeKey }) => {
    const modalContext = React.useContext(ModalContext);
    props = { ...props, ...modalContext.modal };

    let { visible, baseId, modal, animating, animated, stopAnimation, ...htmlProps } = props;
    const modalBackdropProps = useReakitDialogBackdrop(
      {
        visible,
        baseId,
        modal: process.env.NODE_ENV === 'test' ? false : modal,
        animating,
        animated,
        stopAnimation,
      },
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...modalBackdropProps });

    const className = useClassName({
      style: styles.ModalBackdrop,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Modal.Backdrop' }
);

export const ModalBackdrop = createComponent<ModalBackdropProps>(
  (props) => {
    const modalBackdropProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: modalBackdropProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Modal.Backdrop',
    },
    themeKey: 'Modal.Backdrop',
  }
);
