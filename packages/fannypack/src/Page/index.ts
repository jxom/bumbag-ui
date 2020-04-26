import * as styles from './styles';
import { PageWithSidebar as _PageWithSidebar } from './PageWithSidebar';
import { PageWithSidebarDisclosure } from './PageWithSidebarDisclosure';
import { PageWithSidebarMinimize } from './PageWithSidebarMinimize';

export * from './PageContent';
export * from './PageContentWrapper';
export * from './PageWithSidebar';
export * from './PageWithSidebarDisclosure';
export * from './PageWithSidebarMinimize';
export * from './usePage';
export { styles as pageContentStyles };

export const PageWithSidebar = Object.assign(_PageWithSidebar, {
  Disclosure: PageWithSidebarDisclosure,
  Minimize: PageWithSidebarMinimize
});
