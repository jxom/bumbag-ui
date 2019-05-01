// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  ..._get(overrides, 'Page', {}),
  collapseBreakpoint: 'desktop',
  WithSidebar: {
    sidebarWidth: '250px'
  }
});
