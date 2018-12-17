import * as React from 'react';
import * as PropTypes from 'prop-types';
import ReakitOverlay from '@jmoxey/reakit/Overlay';

export type OverlayContainerProps = {
  children: ({ isVisible }: { isVisible: boolean }) => React.ReactNode;
  defaultVisible?: boolean;
  initialState?: Object;
};

export const OverlayContainer: React.FunctionComponent<OverlayContainerProps> = ({
  children,
  defaultVisible,
  initialState,
  ...props
}) => (
  <ReakitOverlay.Container initialState={{ visible: defaultVisible, ...initialState }} {...props}>
    {({ visible, ...rest }: { visible: boolean }) => children({ isVisible: visible, ...rest })}
  </ReakitOverlay.Container>
);

export const overlayContainerPropTypes = {
  children: PropTypes.func.isRequired,
  defaultVisible: PropTypes.bool,
  initialState: PropTypes.object
};
OverlayContainer.propTypes = overlayContainerPropTypes;

export const overlayContainerDefaultProps = {
  defaultVisible: false,
  initialState: {}
};
OverlayContainer.defaultProps = overlayContainerDefaultProps;

export default OverlayContainer;
