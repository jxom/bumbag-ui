import * as styles from './Page.styles';
import { PageWithSidebar as _PageWithSidebar } from './PageWithSidebar';
import { PageWithSidebarDisclosure } from './PageWithSidebarDisclosure';
import { PageWithSidebarMinimize } from './PageWithSidebarMinimize';
import { PageWithHeader as _PageWithHeader } from './PageWithHeader';
import { PageWithHeaderDisclosure } from './PageWithHeaderDisclosure';

export * from './PageContent';
export * from './PageContentWrapper';
export * from './PageContext';
export * from './PageWithHeader';
export * from './PageWithHeaderDisclosure';
export * from './PageWithSidebar';
export * from './PageWithSidebarDisclosure';
export * from './PageWithSidebarMinimize';
export * from './usePage';
export { styles as pageStyles };

export const PageWithSidebar = Object.assign(_PageWithSidebar, {
  Disclosure: PageWithSidebarDisclosure,
  Minimize: PageWithSidebarMinimize,
});

export const PageWithHeader = Object.assign(_PageWithHeader, {
  Disclosure: PageWithHeaderDisclosure,
});
