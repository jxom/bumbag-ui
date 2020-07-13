import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Drawer, DrawerProps } from '../Drawer';
import { Disclosure, DisclosureProps } from '../Disclosure';

import { PageContext } from './PageContext';
import * as styles from './styles';

export type LocalPageWithSidebarProps = {
  collapsedSidebarWidth?: string;
  collapsedSidebarProps?: Partial<DrawerProps>;
  expandedSidebarProps?: Partial<DisclosureProps>;
  defaultIsVisible?: boolean;
  minimizedSidebarWidth?: string;
  sidebarWidth?: string;
  sidebar: React.ReactElement<any>;
};
export type PageWithSidebarProps = BoxProps & LocalPageWithSidebarProps;

const useProps = createHook<PageWithSidebarProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      children,
      collapsedSidebarProps,
      defaultIsVisible,
      expandedSidebarProps,
      overrides,
      sidebar,
      ...restProps
    } = props;
    const boxProps = Box.useProps({
      ...restProps,
    });

    const { collapseBelow, isCollapsed, sidebar: sidebarState } = React.useContext(PageContext);

    const className = useClassName({
      style: styles.PageWithSidebar,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
    });
    const sidebarClassName = useClassName({
      style: styles.PageWithSidebarSidebar,
      styleProps: { ...props, collapseBelow, isCollapsed, isSidebarMinimized: sidebarState.isMinimized },
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Sidebar',
    });
    const sidebarExpandedWrapperClassName = useClassName({
      style: styles.PageWithSidebarSidebarExpandedWrapper,
      styleProps: { ...props, collapseBelow },
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'SidebarExpandedWrapper',
    });
    const sidebarCollapsedWrapperClassName = useClassName({
      style: styles.PageWithSidebarSidebarCollapsedWrapper,
      styleProps: { ...props, collapseBelow },
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'SidebarCollapsedWrapper',
    });
    const contentClassName = useClassName({
      style: styles.PageWithSidebarContent,
      styleProps: {
        ...props,
        collapseBelow,
        isCollapsed,
        isSidebarMinimized: sidebarState.isMinimized,
        isSidebarOpen: sidebarState.isOpen,
      },
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Content',
    });

    React.useEffect(() => {
      if (!defaultIsVisible) {
        sidebarState.disclosure.hide();
      }
    }, [defaultIsVisible, sidebarState.disclosure]);

    return {
      ...boxProps,
      className,
      children: (
        <React.Fragment>
          <Drawer
            className={sidebarCollapsedWrapperClassName}
            overrides={overrides}
            {...collapsedSidebarProps}
            {...sidebarState.drawer}
          >
            <Box className={sidebarClassName} overrides={overrides}>
              {sidebar}
            </Box>
          </Drawer>
          <Disclosure.Content overrides={overrides} {...expandedSidebarProps} {...sidebarState.disclosure}>
            <Box className={sidebarExpandedWrapperClassName} overrides={overrides}>
              <Box className={sidebarClassName} overrides={overrides}>
                {sidebar}
              </Box>
            </Box>
          </Disclosure.Content>
          <Box className={contentClassName} overrides={overrides}>
            {children}
          </Box>
        </React.Fragment>
      ),
    };
  },
  {
    defaultProps: {
      collapsedSidebarProps: {},
      expandedSidebarProps: {},
      defaultIsVisible: true,
      minimizedSidebarWidth: '60px',
      sidebarWidth: '250px',
      collapsedSidebarWidth: '320px',
    },
    themeKey: 'PageWithSidebar',
  }
);

export const PageWithSidebar = createComponent<PageWithSidebarProps>(
  (props) => {
    const pageWithSidebarProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: pageWithSidebarProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'PageWithSidebar',
    },
    themeKey: 'PageWithSidebar',
  }
);
