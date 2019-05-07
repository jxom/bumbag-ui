import { css } from '../../styled';
// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  collapseBreakpoint: 'desktop',
  ..._get(overrides, 'Page', {}),
  WithSidebar: {
    minimizedSidebarWidth: '60px',
    sidebarWidth: '250px',
    ..._get(overrides, 'Page.WithSidebar', {})
  }
});
