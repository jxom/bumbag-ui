import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Drawer, DrawerProps } from '../Drawer';
import { Disclosure, DisclosureProps } from '../Disclosure';

import { PageContext } from './PageContext';
import * as styles from './Page.styles';

export type LocalPageWithSidebarProps = {
  /** Sets the sidebar component. */
  sidebar: React.ReactElement<any>;
  /** Sets the width of the sidebar. */
  sidebarWidth?: string;
  /** Sets the placement of the sidebar. */
  sidebarPlacement?: 'left' | 'right';
  /** Sets the width of the collapsed (mobile) sidebar. */
  collapsedSidebarWidth?: string;
  /** Props to spread on the collapsed (mobile) sidebar. */
  collapsedSidebarProps?: Partial<DrawerProps>;
  /** Props to spread on the expanded sidebar. */
  expandedSidebarProps?: Partial<DisclosureProps>;
  /** Sets the initial visibility of the sidebar. */
  defaultIsVisible?: boolean;
  /** Sets the width of the minimized sidebar. */
  minimizedSidebarWidth?: string;
};
export type PageWithSidebarProps = BoxProps & LocalPageWithSidebarProps;

const useProps = createHook<PageWithSidebarProps>(
  (props, { themeKey }) => {
    const {
      children,
      collapsedSidebarProps,
      defaultIsVisible,
      expandedSidebarProps,
      overrides,
      sidebar,
      sidebarPlacement,
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
      prevClassName: boxProps.className,
    });
    const sidebarClassName = useClassName({
      style: styles.PageWithSidebarSidebar,
      styleProps: { ...props, collapseBelow, isCollapsed, isSidebarMinimized: sidebarState.isMinimized },
      themeKey,
      themeKeySuffix: 'Sidebar',
    });
    const sidebarExpandedWrapperClassName = useClassName({
      style: styles.PageWithSidebarSidebarExpandedWrapper,
      styleProps: { ...props, collapseBelow },
      themeKey,
      themeKeySuffix: 'SidebarExpandedWrapper',
    });
    const sidebarCollapsedWrapperClassName = useClassName({
      style: styles.PageWithSidebarSidebarCollapsedWrapper,
      styleProps: { ...props, collapseBelow },
      themeKey,
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
      themeKeySuffix: 'Content',
    });

    //////////////////////////////////////////

    React.useEffect(() => {
      if (!defaultIsVisible) {
        sidebarState.disclosure.hide();
      }
    }, [defaultIsVisible, sidebarState.disclosure]);

    //////////////////////////////////////////

    return {
      ...boxProps,
      className,
      children: (
        <React.Fragment>
          <Box>
            <Drawer
              className={sidebarCollapsedWrapperClassName}
              overrides={overrides}
              slide
              fade
              placement={sidebarPlacement}
              {...collapsedSidebarProps}
              {...sidebarState.drawer}
              animating={false}
            >
              <Box className={sidebarClassName} overrides={overrides}>
                {isCollapsed ? sidebar : null}
              </Box>
            </Drawer>
          </Box>
          <Disclosure.Content overrides={overrides} {...expandedSidebarProps} {...sidebarState.disclosure}>
            <Box className={sidebarExpandedWrapperClassName} overrides={overrides}>
              <Box className={sidebarClassName} overrides={overrides}>
                {!isCollapsed ? sidebar : null}
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
      sidebarPlacement: 'left',
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
