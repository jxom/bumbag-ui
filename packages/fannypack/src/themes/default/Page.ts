// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  collapseBreakpoint: 'desktop',
  WithSidebar: {
    sidebarWidth: '250px',
    ..._get(overrides, 'Page.WithSidebar', {})
  },
  ..._get(overrides, 'Page', {})
});
