import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { usePage } from './usePage';
import * as styles from './styles';

export type LocalPageWithSidebarMinimizeProps = {};
export type PageWithSidebarMinimizeProps = BoxProps & LocalPageWithSidebarMinimizeProps;

const useProps = createHook<PageWithSidebarMinimizeProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const page = usePage();
    const htmlProps = Box.useProps(props);

    const className = useClassName({
      style: styles.PageWithSidebarMinimize,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className, onClick: page.toggleMinimize };
  },
  { themeKey: 'PageWithSidebar.Minimize' }
);

export const PageWithSidebarMinimize = createComponent<PageWithSidebarMinimizeProps>(
  (props) => {
    const PageWithSidebarMinimizeProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: PageWithSidebarMinimizeProps,
    });
  },
  {
    attach: {
      useProps,
    },
    defaultProps: {
      use: 'button',
    },
    themeKey: 'PageWithSidebar.Minimize',
  }
);
