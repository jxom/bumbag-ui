import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { ModalBackdrop, ModalBackdropProps } from '../Modal';

import * as styles from './styles';

export type LocalDrawerBackdropProps = {};
export type DrawerBackdropProps = ModalBackdropProps & LocalDrawerBackdropProps;

const useProps = createHook<DrawerBackdropProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const htmlProps = ModalBackdrop.useProps(props);

    const className = useClassName({
      style: styles.DrawerBackdrop,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Drawer.Backdrop' }
);

export const DrawerBackdrop = createComponent<DrawerBackdropProps>(
  props => {
    const DrawerBackdropProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: DrawerBackdropProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Drawer.Backdrop'
  }
);
