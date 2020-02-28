import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, omitCSSProps } from '../utils';

import { DrawerBackdrop } from './DrawerBackdrop';
import { DrawerContent, DrawerContentProps } from './DrawerContent';
import * as styles from './styles';

export type LocalDrawerProps = {
  hasBackdrop?: boolean;
};
export type DrawerProps = DrawerContentProps & LocalDrawerProps;

const useProps = createHook<DrawerProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { hasBackdrop, ...restProps } = props;
    const boxProps = DrawerContent.useProps({
      ...restProps,
      unstable_wrap: children => (
        <React.Fragment>
          {hasBackdrop && (
            <DrawerBackdrop {...omitCSSProps(restProps)}>
              <div />
            </DrawerBackdrop>
          )}
          {children}
        </React.Fragment>
      )
    });

    const className = useClassName({
      style: styles.Drawer,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Drawer.Wrapper' }
);

export const Drawer = createComponent<DrawerProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Drawer.Wrapper'
  }
);
