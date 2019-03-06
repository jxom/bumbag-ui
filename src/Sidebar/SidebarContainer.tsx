import * as React from 'react';
import * as PropTypes from 'prop-types';
import ReakitSidebar from 'reakit/Sidebar';

export type SidebarContainerProps = {
  children: ({ isVisible }: { isVisible: boolean }) => React.ReactNode;
  defaultVisible?: boolean;
  initialState?: Object;
};

export const SidebarContainer: React.FunctionComponent<SidebarContainerProps> = ({
  children,
  defaultVisible,
  initialState,
  ...props
}) => (
  <ReakitSidebar.Container initialState={{ visible: defaultVisible, ...initialState }} {...props}>
    {({ visible, ...rest }: { visible: boolean }) => children({ isVisible: visible, ...rest })}
  </ReakitSidebar.Container>
);

export const sidebarContainerPropTypes = {
  children: PropTypes.func.isRequired,
  defaultVisible: PropTypes.bool,
  initialState: PropTypes.object
};
SidebarContainer.propTypes = sidebarContainerPropTypes;

export const sidebarContainerDefaultProps = {
  defaultVisible: false,
  initialState: {}
};
SidebarContainer.defaultProps = sidebarContainerDefaultProps;

export default SidebarContainer;
