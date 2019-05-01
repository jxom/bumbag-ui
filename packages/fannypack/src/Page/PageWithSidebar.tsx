import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _get from 'lodash/get';
import { FlexProps as ReakitFlexProps } from 'reakit/ts';

import { Omit } from '../types';
import { Box } from '../primitives';
import { withTheme } from '../styled';
import { SidebarProps, sidebarPropTypes } from '../Sidebar/Sidebar';
import PageContainer, { PageState } from './PageContainer';
import {
  PageWithSidebar as _PageWithSidebar,
  Spacer,
  DesktopSidebarWrapper,
  MobileSidebarWrapper,
  Sidebar
} from './styled';

export type LocalPageWithSidebarProps = {
  children: (({ page }: { page: PageState }) => React.ReactNode) | React.ReactNode;
  hideSidebarOnDesktop?: boolean;
  sidebarContent: React.ReactElement<any>;
  sidebarProps?: Omit<SidebarProps, 'children'>;
  sidebarWidth?: string;
  theme?: Object;
};
export type PageWithSidebarProps = ReakitFlexProps & LocalPageWithSidebarProps;

export const PageWithSidebar: React.FunctionComponent<LocalPageWithSidebarProps> = ({
  children,
  hideSidebarOnDesktop: _hideSidebarOnDesktop,
  sidebarContent,
  sidebarProps: _sidebarProps,
  sidebarWidth: _sidebarWidth,
  theme,
  ...props
}) => {
  const defaultProps = _get(theme, 'fannypack.Page.WithSidebar.defaultProps', {});
  const hideSidebarOnDesktop = _hideSidebarOnDesktop || defaultProps.hideSidebarOnDesktop;
  const sidebarProps = _sidebarProps || defaultProps.sidebarProps;
  const sidebarWidth = _sidebarWidth || defaultProps.sidebarWidth;
  console.log('test', _hideSidebarOnDesktop, defaultProps.hideSidebarOnDesktop);
  return (
    <PageContainer>
      {page => (
        <_PageWithSidebar {...props}>
          <Spacer hideSidebarOnDesktop={hideSidebarOnDesktop} sidebarWidth={sidebarWidth} />
          {page && page.isCollapsed ? (
            // @ts-ignore
            <MobileSidebarWrapper
              {...sidebarProps}
              isVisible={page.isSidebarOpen}
              onClickClose={page.closeSidebar}
              hide={page.closeSidebar}
              width={sidebarWidth}
            >
              <Sidebar sidebarWidth={sidebarWidth}>{sidebarContent}</Sidebar>
            </MobileSidebarWrapper>
          ) : (
            <React.Fragment>
              {!hideSidebarOnDesktop && (
                <DesktopSidebarWrapper>
                  <Sidebar sidebarWidth={sidebarWidth}>{sidebarContent}</Sidebar>
                </DesktopSidebarWrapper>
              )}
            </React.Fragment>
          )}
          <Box width="100%">
            {typeof children === 'function'
              ? /*
                // @ts-ignore */
                children({ page })
              : children}
          </Box>
        </_PageWithSidebar>
      )}
    </PageContainer>
  );
};

export const PageWithSidebarPropTypes = {
  children: PropTypes.node.isRequired,
  hideSidebarOnDesktop: PropTypes.bool,
  sidebarContent: PropTypes.element.isRequired,
  sidebarProps: PropTypes.shape(sidebarPropTypes),
  sidebarWidth: PropTypes.string,
  theme: PropTypes.object
};
PageWithSidebar.propTypes = PageWithSidebarPropTypes;

export const PageWithSidebarDefaultProps = {
  hideSidebarOnDesktop: false,
  sidebarProps: {},
  sidebarWidth: '250px',
  theme: {}
};
PageWithSidebar.defaultProps = PageWithSidebarDefaultProps;

const C: React.FunctionComponent<PageWithSidebarProps> = withTheme(PageWithSidebar);
export default C;
