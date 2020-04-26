import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useBreakpoint } from '../utils';
import { Box, BoxProps } from '../Box';
import { Drawer, DrawerProps } from '../Drawer';
import { Disclosure, DisclosureProps } from '../Disclosure';

import * as styles from './styles';

export type LocalPageWithSidebarProps = {
  collapseBreakpoint?: string;
  collapsedSidebarWidth?: string;
  collapsedSidebarProps?: Partial<DrawerProps>;
  expandedSidebarProps?: Partial<DisclosureProps>;
  defaultIsVisible?: boolean;
  minimizedSidebarWidth?: string;
  sidebarWidth?: string;
  sidebar: React.ReactElement<any>;
};
export type PageWithSidebarProps = BoxProps & LocalPageWithSidebarProps;

export const PageWithSidebarContext = React.createContext({
  isCollapsed: false,
  isSidebarOpen: true,
  openSidebar: () => undefined,
  closeSidebar: () => undefined,
  toggleSidebar: () => undefined,
  isSidebarMinimized: false,
  minimizeSidebar: () => undefined,
  maximizeSidebar: () => undefined,
  toggleMinimize: () => undefined,
  drawer: {},
  disclosure: {}
});

const useProps = createHook<PageWithSidebarProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      children,
      collapseBreakpoint,
      collapsedSidebarProps,
      defaultIsVisible,
      expandedSidebarProps,
      overrides,
      sidebar,
      ...restProps
    } = props;
    const boxProps = Box.useProps(restProps);

    const isCollapsed = useBreakpoint(collapseBreakpoint);
    const [isSidebarMinimized, setIsSidebarMinimized] = React.useState(false);

    const className = useClassName({
      style: styles.PageWithSidebar,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });
    const spacerClassName = useClassName({
      style: styles.PageWithSidebarSpacer,
      styleProps: { ...props, isCollapsed, isSidebarMinimized },
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Spacer'
    });
    const sidebarClassName = useClassName({
      style: styles.PageWithSidebarSidebar,
      styleProps: { ...props, isCollapsed, isSidebarMinimized },
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Sidebar'
    });
    const sidebarExpandedWrapperClassName = useClassName({
      style: styles.PageWithSidebarSidebarExpandedWrapper,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'SidebarExpandedWrapper'
    });
    const sidebarCollapsedWrapperClassName = useClassName({
      style: styles.PageWithSidebarSidebarCollapsedWrapper,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'SidebarCollapsedWrapper'
    });
    const contentClassName = useClassName({
      style: styles.PageWithSidebarContent,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Content'
    });

    const drawer = Drawer.useState();
    const disclosure = Disclosure.useState({ visible: defaultIsVisible });
    const sidebarState = isCollapsed ? drawer : disclosure;

    const contextValue = React.useMemo(
      () => ({
        isCollapsed,

        isSidebarOpen: sidebarState.visible,
        openSidebar: sidebarState.show,
        closeSidebar: sidebarState.hide,
        toggleSidebar: sidebarState.toggle,

        isSidebarMinimized,
        minimizeSidebar: () => setIsSidebarMinimized(true),
        maximizeSidebar: () => setIsSidebarMinimized(false),
        toggleMinimize: () => setIsSidebarMinimized(isMinimized => !isMinimized),

        drawer,
        disclosure
      }),
      [
        disclosure,
        drawer,
        isCollapsed,
        isSidebarMinimized,
        sidebarState.hide,
        sidebarState.show,
        sidebarState.toggle,
        sidebarState.visible
      ]
    );

    React.useEffect(() => {
      if (isCollapsed) {
        setIsSidebarMinimized(false);
      } else {
        drawer.hide();
      }
    }, [drawer, isCollapsed]);

    return {
      ...boxProps,
      className,
      children: (
        <PageWithSidebarContext.Provider value={contextValue}>
          {isCollapsed ? (
            <Drawer
              className={sidebarCollapsedWrapperClassName}
              overrides={overrides}
              {...collapsedSidebarProps}
              {...drawer}
            >
              <Box className={sidebarClassName} overrides={overrides}>
                {sidebar}
              </Box>
            </Drawer>
          ) : (
            <Disclosure.Content overrides={overrides} {...expandedSidebarProps} {...disclosure}>
              <Box className={spacerClassName} overrides={overrides} />
              <Box className={sidebarExpandedWrapperClassName} overrides={overrides}>
                <Box className={sidebarClassName} overrides={overrides}>
                  {sidebar}
                </Box>
              </Box>
            </Disclosure.Content>
          )}
          <Box className={contentClassName} overrides={overrides}>
            {children}
          </Box>
        </PageWithSidebarContext.Provider>
      )
    };
  },
  {
    defaultProps: {
      collapseBreakpoint: 'max-tablet',
      collapsedSidebarProps: {},
      expandedSidebarProps: {},
      defaultIsVisible: true,
      minimizedSidebarWidth: '60px',
      sidebarWidth: '250px',
      collapsedSidebarWidth: '320px'
    },
    themeKey: 'PageWithSidebar'
  }
);

export const PageWithSidebar = createComponent<PageWithSidebarProps>(
  props => {
    const pageWithSidebarProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: pageWithSidebarProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'PageWithSidebar'
  }
);
