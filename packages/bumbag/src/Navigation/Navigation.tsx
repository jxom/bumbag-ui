import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Navigation.styles';

export type LocalNavigationProps = {};
export type NavigationProps = BoxProps & LocalNavigationProps;

const useProps = createHook<NavigationProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Navigation,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className, role: props.use !== 'nav' ? 'navigation' : undefined };
  },
  { themeKey: 'Navigation' }
);

export const Navigation = createComponent<NavigationProps>(
  (props) => {
    const navigationProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: navigationProps,
    });
  },
  {
    attach: { useProps, displayName: 'Navigation' },
    defaultProps: {
      use: 'nav',
    },
    themeKey: 'Navigation',
  }
);
