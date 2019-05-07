// @ts-ignore
import _get from 'lodash/get';
import styled, { css, palette, space, theme } from '../styled';
import { Box, Flex } from '../primitives';
import { Container } from '../Container';
import { Sidebar as _Sidebar, SidebarProps } from '../Sidebar';
import { PageContentProps } from './PageContent';

export const getWidth = (props: any) => {
  if (props.isMinimized) {
    return theme('fannypack.Page.WithSidebar.minimizedSidebarWidth')(props);
  }
  return props.sidebarWidth || theme('fannypack.Page.WithSidebar.sidebarWidth')(props);
};

export const PageContent = styled(Container)<PageContentProps>`
  padding: ${space(4, 'major')}rem ${space(2, 'major')}rem;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    padding-top: ${space(2, 'major')}rem;
    padding-bottom: ${space(2, 'major')}rem;

    & {
      ${theme('fannypack.Page.Content.mobile')};
    }
  }

  ${props =>
    props.isFluid &&
    css`
      padding-top: ${space(2, 'major')}rem;
      padding-bottom: ${space(2, 'major')}rem;

      & {
        ${theme('fannypack.Page.Content.fluid')};
      }
    `}

  & {
    ${theme('fannypack.Page.Content.base')};
  }
`;

export const PageContentWrapper = styled(Box)`
  & {
    ${theme('fannypack.Page.Content.wrapper')};
  }
`;

export const Spacer = styled(Box)<{ sidebarWidth?: string; hideSidebarOnDesktop?: string; isMinimized?: boolean }>`
  width: ${getWidth};
  min-width: ${getWidth};

  @media screen and (max-width: ${props =>
      theme(`fannypack.layout.${_get(props, 'theme.fannypack.Page.collapseBreakpoint')}Breakpoint`)}px) {
    width: 0px;
    min-width: 0px;

    & {
      ${theme('fannypack.Page.WithSidebar.Spacer.mobile')};
    }
  }

  ${props =>
    props.hideSidebarOnDesktop &&
    css`
      width: 0px;
      min-width: 0px;
    `}

  & {
    ${theme('fannypack.Page.WithSidebar.Spacer.base')};
  }
`;

export const Sidebar = styled(Box)<{ sidebarWidth?: string; isMinimized?: boolean }>`
  background-color: ${palette('white700')};
  height: 100vh;
  min-width: ${getWidth};
  width: ${getWidth};
  overflow-y: scroll;
  transform: translateX(0px);

  ${props =>
    props.isMinimized &&
    css`
      overflow: visible;
    `}

  & {
    ${theme('fannypack.Page.WithSidebar.Sidebar.base')};
  }
`;

export const DesktopSidebarWrapper = styled(Box)`
  position: fixed;

  @media screen and (max-width: ${props =>
      theme(`fannypack.layout.${_get(props, 'theme.fannypack.Page.collapseBreakpoint')}Breakpoint`)}px) {
    display: none;
  }

  & {
    ${theme('fannypack.Page.WithSidebar.DesktopSidebarWrapper.base')};
  }
`;

export const MobileSidebarWrapper = styled(_Sidebar)<{ sidebarWidth?: string }>`
  @media screen and (min-width: ${props =>
      theme(`fannypack.layout.${_get(props, 'theme.fannypack.Page.collapseBreakpoint')}Breakpoint`)(props) + 1}px) {
    display: none;
  }
  width: ${props => props.sidebarWidth || theme('fannypack.Page.WithSidebar.sidebarWidth')};

  & {
    ${theme('fannypack.Page.WithSidebar.MobileSidebarWrapper.base')};
  }
`;

export const PageWithSidebar = styled(Flex)`
  & {
    ${theme('fannypack.Page.WithSidebar.base')};
  }
`;
