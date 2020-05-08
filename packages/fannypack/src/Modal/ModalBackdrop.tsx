import * as React from 'react';
import {
  Box as ReakitBox,
  DialogBackdropProps as ReakitDialogBackdropProps,
  useDialogBackdrop as useReakitDialogBackdrop
} from 'reakit';
import _merge from 'lodash/merge';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { ModalContext } from './ModalState';
import * as styles from './styles';

export type LocalModalBackdropProps = {};
export type ModalBackdropProps = BoxProps & ReakitDialogBackdropProps & LocalModalBackdropProps;

const useProps = createHook<ModalBackdropProps>(
  (props, { themeKey, themeKeyOverride }) => {
    let { visible, baseId, modal, animating, animated, stopAnimation, unstable_setIsMounted, ...htmlProps } = props;
    const modalContext = React.useContext(ModalContext);
    const modalBackdropProps = useReakitDialogBackdrop(
      _merge(
        {
          visible,
          baseId,
          modal,
          animating,
          animated,
          stopAnimation,
          unstable_setIsMounted
        },
        modalContext.modal
      ),
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...modalBackdropProps });

    const className = useClassName({
      style: styles.ModalBackdrop,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Modal.Backdrop' }
);

export const ModalBackdrop = createComponent<ModalBackdropProps>(
  props => {
    const modalBackdropProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: modalBackdropProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Modal.Backdrop'
  }
);
