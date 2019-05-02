import * as React from 'react';
import * as PropTypes from 'prop-types';
import Media from 'react-media';
import { Container } from 'reakit';
import { ActionMap } from 'constate/dist/ts/src';
// @ts-ignore
import _get from 'lodash/get';

import { withTheme } from '../styled';

type Actions = {
  openSidebar: () => void;
  closeSidebar: () => void;
  handleChangeCollapsed: (isCollapsed: boolean) => void;
};
type State = {
  isCollapsed: boolean;
  isSidebarOpen: boolean;
};
export type PageState = Actions & State;
export type PageContainerProps = {
  children: (props: Actions & State) => React.ReactNode;
  theme?: Object;
};

const initialState = { isSidebarOpen: false, isCollapsed: false };

const actions: ActionMap<State, Actions> = {
  openSidebar: () => () => ({
    isSidebarOpen: true
  }),
  closeSidebar: () => () => ({
    isSidebarOpen: false
  }),
  handleChangeCollapsed: isCollapsed => () => ({
    isCollapsed,
    isSidebarOpen: false
  })
};

export const PageContainer: React.FunctionComponent<PageContainerProps> = ({ children, theme }) => {
  const breakpoint = _get(theme, 'fannypack.Page.collapseBreakpoint');
  const breakpointPx = _get(theme, `fannypack.layout.${breakpoint}Breakpoint`);
  return (
    <Container context="page" initialState={initialState} actions={actions}>
      {page => (
        <React.Fragment>
          <Media query={`(max-width: ${breakpointPx}px)`} onChange={page.handleChangeCollapsed} />
          {children(page)}
        </React.Fragment>
      )}
    </Container>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object
};

PageContainer.defaultProps = {
  theme: {}
};

// @ts-ignore
const _PageContainer = withTheme(PageContainer);
export default _PageContainer;

export const withPage = (C: React.ComponentType<any>) => (props: any) => (
  <_PageContainer>{(page: any) => <C page={page} {...props} />}</_PageContainer>
);
