import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { ModalDisclosure, ModalDisclosureProps } from '../Modal';

import * as styles from './Drawer.styles';

export type LocalDrawerDisclosureProps = {};
export type DrawerDisclosureProps = ModalDisclosureProps & LocalDrawerDisclosureProps;

const useProps = createHook<Partial<DrawerDisclosureProps>>(
  (props, { themeKey }) => {
    const htmlProps = ModalDisclosure.useProps(props);

    const className = useClassName({
      style: styles.DrawerDisclosure,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Drawer.Disclosure' }
);

export const DrawerDisclosure = createComponent<Partial<DrawerDisclosureProps>>(
  (props) => {
    const DrawerDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: DrawerDisclosureProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Drawer.Disclosure',
    },
    defaultProps: {
      use: 'button',
    },
    themeKey: 'Drawer.Disclosure',
  }
);
