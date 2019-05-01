import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _get from 'lodash/get';
import { FlexProps as ReakitFlexProps } from 'reakit/ts';

import { Omit } from '../types';
import { Box } from '../primitives';
import { withTheme } from '../styled';
import { SidebarProps, sidebarPropTypes, sidebarDefaultProps } from '../Sidebar/Sidebar';
import PageContainer from './PageContainer';
import {
  PageWithSidebar as _PageWithSidebar,
  Spacer,
  DesktopSidebarWrapper,
  MobileSidebarWrapper,
  Sidebar
} from './styled';

export type LocalPageWithSidebarProps = {
  children: React.ReactNode;
  sidebarContent: React.ReactElement<any>;
  sidebarProps?: Omit<SidebarProps, 'children'>;
  sidebarWidth?: string;
  theme?: Object;
};
export type PageWithSidebarProps = ReakitFlexProps & LocalPageWithSidebarProps;

export const PageWithSidebar: React.FunctionComponent<LocalPageWithSidebarProps> = ({
  children,
  sidebarContent,
  sidebarProps,
  sidebarWidth,
  theme,
  ...props
}) => {
  return (
    <PageContainer>
      {page => (
        <_PageWithSidebar {...props}>
          <Spacer sidebarWidth={sidebarWidth} />
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
            <DesktopSidebarWrapper>
              <Sidebar sidebarWidth={sidebarWidth}>{sidebarContent}</Sidebar>
            </DesktopSidebarWrapper>
          )}
          <Box width="100%">{children}</Box>
        </_PageWithSidebar>
      )}
    </PageContainer>
  );
};

export const PageWithSidebarPropTypes = {
  children: PropTypes.node.isRequired,
  sidebarContent: PropTypes.element.isRequired,
  sidebarProps: PropTypes.shape(sidebarPropTypes),
  sidebarWidth: PropTypes.string,
  theme: PropTypes.object
};
PageWithSidebar.propTypes = PageWithSidebarPropTypes;

export const PageWithSidebarDefaultProps = {
  sidebarProps: {},
  sidebarWidth: '250px',
  theme: {}
};
PageWithSidebar.defaultProps = PageWithSidebarDefaultProps;

const C: React.FunctionComponent<PageWithSidebarProps> = withTheme(PageWithSidebar);
export default C;
