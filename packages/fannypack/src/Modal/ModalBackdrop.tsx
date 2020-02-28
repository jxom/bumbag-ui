import {
  Box as ReakitBox,
  DialogBackdropProps as ReakitDialogBackdropProps,
  useDialogBackdrop as useReakitDialogBackdrop
} from 'reakit';
import _omit from 'lodash-es/omit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalModalBackdropProps = {};
export type ModalBackdropProps = BoxProps & ReakitDialogBackdropProps & LocalModalBackdropProps;

const useProps = createHook<ModalBackdropProps>(
  (props, { themeKey, themeKeyOverride }) => {
    let {
      visible,
      baseId,
      unstable_animating,
      unstable_animated,
      unstable_stopAnimation,
      unstable_setIsMounted,
      ...htmlProps
    } = props;
    const modalBackdropProps = useReakitDialogBackdrop(
      {
        visible,
        baseId,
        unstable_animating,
        unstable_animated,
        unstable_stopAnimation,
        unstable_setIsMounted
      },
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
