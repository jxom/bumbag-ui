import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useViewportHeight } from '../utils';
import { Modal, ModalContext, ModalProps } from '../Modal';

import * as styles from './Drawer.styles';

export type LocalDrawerProps = {
  /** Indicates if the drawer should span the whole width/height of the screen. */
  isFullScreen?: boolean;
};
export type DrawerProps = ModalProps & LocalDrawerProps;

const useProps = createHook<Partial<DrawerProps>>(
  (props, { themeKey }) => {
    const modalContext = React.useContext(ModalContext);
    const viewportHeight = useViewportHeight({ enabled: modalContext.modal.visible || props.visible });
    const modalProps = Modal.useProps({ ...props }, { themeKey: 'Drawer' });

    const className = useClassName({
      style: styles.Drawer,
      styleProps: { ...props, viewportHeight },
      themeKey,
      prevClassName: modalProps.className,
    });

    return { ...modalProps, className };
  },
  { defaultProps: { duration: '0.2s', placement: 'left' }, themeKey: 'Drawer' }
);

export const Drawer = createComponent<Partial<DrawerProps>>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Drawer',
    },
    themeKey: 'Drawer',
  }
);
