import {
  Box as ReakitBox,
  DialogDisclosureProps as ReakitDialogDisclosureProps,
  useDialogDisclosure as useReakitDialogDisclosure
} from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalModalDisclosureProps = {};
export type ModalDisclosureProps = BoxProps & ReakitDialogDisclosureProps & LocalModalDisclosureProps;

const useProps = createHook<ModalDisclosureProps>(
  (props, themeKey) => {
    let { disabled, focusable, visible, toggle, unstable_hiddenId, ...htmlProps } = props;
    const modalDisclosureProps = useReakitDialogDisclosure(
      { disabled, focusable, visible, toggle, unstable_hiddenId },
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...modalDisclosureProps });

    const className = useClassName({
      style: styles.ModalDisclosure,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Modal.Disclosure' }
);

export const ModalDisclosure = createComponent<ModalDisclosureProps>(
  props => {
    const modalDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: modalDisclosureProps
    });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'button'
    },
    themeKey: 'Modal.Disclosure'
  }
);
