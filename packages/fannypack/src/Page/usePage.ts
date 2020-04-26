import * as React from 'react';
import { PageWithSidebarContext } from './PageWithSidebar';

export function usePage() {
  const pageWithSidebarContext = React.useContext(PageWithSidebarContext);
  return {
    ...pageWithSidebarContext
  };
}
