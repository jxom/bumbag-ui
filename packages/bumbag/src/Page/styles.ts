import { css, cssClass } from '../styled';
import { breakpoint, getHiddenScrollbarStyles, palette, space, theme } from '../utils';

export const PageContent = (styleProps) => cssClass`
  padding: ${space(4, 'major')(styleProps)}rem ${space(2, 'major')(styleProps)}rem;

  ${
    styleProps.isFluid &&
    css`
      padding: ${space(4, 'major')(styleProps)}rem ${theme('Container.fluidMargin')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `styles.fluid`)(styleProps)};
      }
    `
  }

  ${breakpoint(
    'max-tablet',
    css`
      padding-top: ${space(2, 'major')(styleProps)}rem;
      padding-bottom: ${space(2, 'major')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `styles.mobile`)(styleProps)};
      }
    `
  )(styleProps)}

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageContentWrapper = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageWithSidebar = (styleProps) => cssClass`
  min-height: 100vh;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageWithSidebarContent = (styleProps) => cssClass`
  width: 100%;

  ${
    styleProps.sidebarPlacement === 'left' &&
    css`
      padding-left: ${getWidth(styleProps)};

      ${breakpoint(
        `max-${styleProps.collapseBelow}`,
        css`
          padding-left: 0px;
        `
      )(styleProps)}

      ${!styleProps.isSidebarOpen &&
      css`
        padding-left: 0px;
      `}
    `
  }
  ${
    styleProps.sidebarPlacement === 'right' &&
    css`
      padding-right: ${getWidth(styleProps)};

      ${breakpoint(
        `max-${styleProps.collapseBelow}`,
        css`
          padding-right: 0px;
        `
      )(styleProps)}

      ${!styleProps.isSidebarOpen &&
      css`
        padding-right: 0px;
      `}
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageWithSidebarSidebar = (styleProps) => cssClass`
  background-color: ${palette('background')(styleProps)};
  height: 100vh;
  min-width: ${getWidth(styleProps)};
  width: ${getWidth(styleProps)};
  transform: translateX(0px);

  ${
    styleProps.sidebarPlacement === 'left' &&
    css`
      border-right: 1px solid ${palette('white800', { dark: 'gray700' })(styleProps)};
    `
  }

  ${
    styleProps.sidebarPlacement === 'right' &&
    css`
      border-left: 1px solid ${palette('white800', { dark: 'gray700' })(styleProps)};
    `
  }

  ${
    styleProps.isSidebarMinimized &&
    css`
      overflow: visible;
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageWithSidebarSidebarExpandedWrapper = (styleProps) => cssClass`
  position: fixed;
  z-index: 999999;
  overflow-y: scroll;

  ${getHiddenScrollbarStyles()};

  ${
    styleProps.sidebarPlacement === 'right' &&
    css`
      right: 0;
    `
  }

  ${breakpoint(
    `max-${styleProps.collapseBelow}`,
    css`
      display: none;
    `
  )(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageWithSidebarSidebarCollapsedWrapper = (styleProps) => cssClass`
  &&& {
    min-width: ${styleProps.collapsedSidebarWidth};
    overflow-y: scroll;

    ${getHiddenScrollbarStyles()};
  }

  ${breakpoint(`max-${styleProps.collapseBelow}`, css``, {
    else: css`
      display: none;
    `,
  })(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageWithSidebarDisclosure = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageWithSidebarMinimize = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageWithHeader = (styleProps) => cssClass`
  min-height: 100vh;
  position: relative;

  & .bb-PageWithSidebarSidebarExpandedWrapper {
    top: ${styleProps.headerHeight};
  }

  & .bb-PageWithSidebarSidebar {
    height: calc(100vh - ${styleProps.headerHeight});
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageWithHeaderHeader = (styleProps) => cssClass`
  background-color: ${palette('background')(styleProps)};
  min-height: ${styleProps.headerHeight};
  height: ${styleProps.headerHeight};
  border-bottom: 1px solid ${palette('white800', { dark: 'gray700' })(styleProps)};
  z-index: 999;

  & > * {
    height: 100%;
  }

  ${
    styleProps.sticky &&
    css`
      position: fixed;
      width: 100%;
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageWithHeaderContent = (styleProps) => cssClass`
  ${
    styleProps.sticky &&
    css`
      padding-top: ${styleProps.isHeaderOpen ? styleProps.headerHeight : 'unset'};
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PageWithHeaderDisclosure = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

function getWidth(styleProps) {
  if (styleProps.isSidebarMinimized) {
    return styleProps.minimizedSidebarWidth;
  }
  if (styleProps.isCollapsed) {
    return styleProps.collapsedSidebarWidth;
  }
  return styleProps.sidebarWidth;
}
