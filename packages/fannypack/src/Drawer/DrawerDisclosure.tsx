import { Box as ReakitBox } from 'reakit';
import _omit from 'lodash-es/omit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { ModalDisclosure, ModalDisclosureProps } from '../Modal';

import * as styles from './styles';

export type LocalDrawerDisclosureProps = {};
export type DrawerDisclosureProps = ModalDisclosureProps & LocalDrawerDisclosureProps;

const useProps = createHook<DrawerDisclosureProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const htmlProps = ModalDisclosure.useProps(props);

    const className = useClassName({
      style: styles.DrawerDisclosure,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Drawer.Disclosure' }
);

export const DrawerDisclosure = createComponent<DrawerDisclosureProps>(
  props => {
    const DrawerDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: DrawerDisclosureProps
    });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'button'
    },
    themeKey: 'Drawer.Disclosure'
  }
);
