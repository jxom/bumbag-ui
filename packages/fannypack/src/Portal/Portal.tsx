import * as React from 'react';
import { Portal as ReakitPortal, PortalProps as ReakitPortalProps } from 'reakit';

import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalPortalProps = {};
export type PortalProps = BoxProps & ReakitPortalProps & LocalPortalProps;

function useProps(props: Partial<PortalProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Portal,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, children: <Box {...props}>{boxProps.children}</Box>, className };
}

export const Portal = createComponent<PortalProps>(
  props => {
    const portalProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitPortal,
      use: props.use,
      htmlProps: portalProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Portal'
  }
);
