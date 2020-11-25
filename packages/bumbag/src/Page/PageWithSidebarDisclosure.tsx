import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Disclosure, DisclosureProps } from '../Disclosure';
import { DrawerDisclosure, DrawerDisclosureProps } from '../Drawer';

import { usePage } from './usePage';
import * as styles from './Page.styles';

export type LocalPageWithSidebarDisclosureProps = {};
export type PageWithSidebarDisclosureProps = BoxProps & LocalPageWithSidebarDisclosureProps;

const useProps = createHook<PageWithSidebarDisclosureProps>(
  (props, { themeKey }) => {
    const page = usePage();
    const htmlProps = Disclosure.useProps({
      ...props,
      ...(page.isCollapsed ? page.sidebar.drawer : page.sidebar.disclosure),
    });

    const className = useClassName({
      style: styles.PageWithSidebarDisclosure,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'PageWithSidebar.Disclosure' }
);

export const PageWithSidebarDisclosure = createComponent<PageWithSidebarDisclosureProps>(
  (props) => {
    const PageWithSidebarDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: PageWithSidebarDisclosureProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'PageWithSidebar.Disclosure',
    },
    defaultProps: {
      use: 'button',
    },
    themeKey: 'PageWithSidebar.Disclosure',
  }
);
