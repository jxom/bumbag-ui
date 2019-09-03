import {
  Box as ReakitBox,
  DialogBackdropProps as ReakitDialogBackdropProps,
  useDialogBackdrop as useReakitDialogBackdrop
} from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalModalBackdropProps = {};
export type ModalBackdropProps = BoxProps & ReakitDialogBackdropProps & LocalModalBackdropProps;

function useProps(props: ModalBackdropProps) {
  let {
    visible,
    unstable_hiddenId,
    unstable_animating,
    unstable_animated,
    unstable_stopAnimation,
    unstable_setIsMounted,
    ...htmlProps
  } = props;
  const modalBackdropProps = useReakitDialogBackdrop(
    {
      visible,
      unstable_hiddenId,
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
    prevClassName: htmlProps.className
  });

  return { ...htmlProps, className };
}

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
      defaultProps: {},
      useProps
    },
    themeKey: 'Modal.Backdrop'
  }
);
