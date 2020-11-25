import * as React from 'react';
import {
  Box as ReakitBox,
  DialogDisclosureProps as ReakitDialogDisclosureProps,
  useDialogDisclosure as useReakitDialogDisclosure,
} from 'reakit';

import { useClassName, createComponent, createElement, createHook, merge } from '../utils';
import { Box, BoxProps } from '../Box';

import { ModalContext } from './ModalState';
import * as styles from './Modal.styles';

export type LocalModalDisclosureProps = {};
export type ModalDisclosureProps = BoxProps & ReakitDialogDisclosureProps & LocalModalDisclosureProps;

const useProps = createHook<Partial<ModalDisclosureProps>>(
  (props, { themeKey }) => {
    const modalContext = React.useContext(ModalContext);
    props = { ...props, ...modalContext.modal };

    let { disabled, focusable, visible, toggle, baseId, unstable_disclosureRef, ...htmlProps } = props;
    const modalDisclosureProps = useReakitDialogDisclosure(
      { disabled, focusable, visible, toggle, baseId, unstable_disclosureRef },
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...modalDisclosureProps });

    const className = useClassName({
      style: styles.ModalDisclosure,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Modal.Disclosure' }
);

export const ModalDisclosure = createComponent<Partial<ModalDisclosureProps>>(
  (props) => {
    const modalDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      htmlProps: modalDisclosureProps,
      use: props.use,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Modal.Disclosure',
    },
    defaultProps: {
      use: 'button',
    },
    themeKey: 'Modal.Disclosure',
  }
);
