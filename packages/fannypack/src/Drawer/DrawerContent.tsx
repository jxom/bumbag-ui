import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Modal, ModalProps } from '../Modal';

import * as styles from './styles';

export type LocalDrawerContentProps = {
  isFullScreen?: boolean;
};
export type DrawerContentProps = ModalProps & LocalDrawerContentProps;

const useProps = createHook<DrawerContentProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const modalProps = Modal.useProps({ ...props }, { themeKey: 'Drawer' });

    const className = useClassName({
      style: styles.DrawerContent,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: modalProps.className
    });

    return { ...modalProps, className };
  },
  { defaultProps: { duration: '0.2s', placement: 'left' }, themeKey: 'Drawer' }
);

export const DrawerContent = createComponent<DrawerContentProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Drawer'
  }
);
