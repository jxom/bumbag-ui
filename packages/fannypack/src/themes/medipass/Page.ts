import { css, palette } from '../../styled';

export default {
  collapseBreakpoint: 'widescreen',
  WithSidebar: {
    defaultProps: {
      sidebarProps: {
        hideCloseButton: true
      }
    },
    Sidebar: {
      base: css`
        background-color: ${palette('primary800')};
      `
    },
    DesktopSidebarWrapper: {
      base: css`
        z-index: 1;
      `
    }
  }
};
