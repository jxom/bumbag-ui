import * as React from 'react';
import { Portal as ReakitPortal, PortalProps as ReakitPortalProps } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Portal.styles';

export type LocalPortalProps = {};
export type PortalProps = BoxProps & ReakitPortalProps & LocalPortalProps;

const useProps = createHook<PortalProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Portal,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, children: <Box {...props}>{boxProps.children}</Box>, className };
  },
  { themeKey: 'Portal' }
);

export const Portal = createComponent<PortalProps>(
  (props) => {
    const portalProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitPortal,
      use: props.use,
      htmlProps: portalProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Portal',
    },
    themeKey: 'Portal',
  }
);
