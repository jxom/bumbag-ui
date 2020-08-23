import * as React from 'react';

import { Drawer, DrawerStateReturn } from '../Drawer';
import { Disclosure, DisclosureStateReturn } from '../Disclosure';
import { useBreakpoint } from '../utils';

export const PageContext = React.createContext({
  collapseBelow: 'desktop',
  isCollapsed: false,
  sidebar: {
    isOpen: true,
    open: () => undefined,
    close: () => undefined,
    toggle: () => undefined,
    isMinimized: false,
    minimize: () => undefined,
    maximize: () => undefined,
    toggleMinimize: () => undefined,
    drawer: {} as DrawerStateReturn,
    disclosure: {} as DisclosureStateReturn,
  },
  header: {
    isOpen: true,
    open: () => undefined,
    close: () => undefined,
    toggle: () => undefined,
    disclosure: {} as DisclosureStateReturn,
  },
});

export function PageProvider(props: any) {
  const { children, collapseBelow = 'desktop' } = props;

  const isCollapsed = useBreakpoint(`max-${collapseBelow}`);
  const [isSidebarMinimized, setIsSidebarMinimized] = React.useState(false);

  const sidebarDrawer = Drawer.useState({ animated: true });
  const sidebarDisclosure = Disclosure.useState({ visible: true });
  const sidebarState = isCollapsed ? sidebarDrawer : sidebarDisclosure;

  const headerDisclosure = Disclosure.useState({ visible: true });

  const value = React.useMemo(
    () => ({
      collapseBelow,
      isCollapsed,
      sidebar: {
        isOpen: sidebarState.visible,
        open: sidebarState.show,
        close: sidebarState.hide,
        toggle: sidebarState.toggle,
        isMinimized: isSidebarMinimized,
        minimize: () => setIsSidebarMinimized(true),
        maximize: () => setIsSidebarMinimized(false),
        toggleMinimize: () => setIsSidebarMinimized((isMinimized) => !isMinimized),
        drawer: sidebarDrawer,
        disclosure: sidebarDisclosure,
      },
      header: {
        isOpen: headerDisclosure.visible,
        open: headerDisclosure.show,
        close: headerDisclosure.hide,
        toggle: headerDisclosure.toggle,
        disclosure: headerDisclosure,
      },
    }),
    [
      collapseBelow,
      headerDisclosure,
      isCollapsed,
      isSidebarMinimized,
      sidebarDisclosure,
      sidebarDrawer,
      sidebarState.hide,
      sidebarState.show,
      sidebarState.toggle,
      sidebarState.visible,
    ]
  );

  React.useEffect(() => {
    if (isCollapsed) {
      setIsSidebarMinimized(false);
    }
  }, [isCollapsed]);

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}
