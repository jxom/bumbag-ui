import * as React from 'react';
import {
  Box as ReakitBox,
  DialogDisclosureProps as ReakitDialogDisclosureProps,
  useDialogDisclosure as useReakitDialogDisclosure,
} from 'reakit';
import _merge from 'lodash/merge';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { ModalContext } from './ModalState';
import * as styles from './styles';

export type LocalModalDisclosureProps = {};
export type ModalDisclosureProps = BoxProps & ReakitDialogDisclosureProps & LocalModalDisclosureProps;

const useProps = createHook<ModalDisclosureProps>(
  (props, { themeKey, themeKeyOverride }) => {
    let { disabled, focusable, visible, toggle, baseId, ...htmlProps } = props;
    const modalContext = React.useContext(ModalContext);
    const modalDisclosureProps = useReakitDialogDisclosure(
      _merge({ disabled, focusable, visible, toggle, baseId }, modalContext.modal),
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...modalDisclosureProps });

    const className = useClassName({
      style: styles.ModalDisclosure,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Modal.Disclosure' }
);

export const ModalDisclosure = createComponent<ModalDisclosureProps>(
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
    },
    defaultProps: {
      use: 'button',
    },
    themeKey: 'Modal.Disclosure',
  }
);
