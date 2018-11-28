// @flow
import React from 'react';
import OverlayContainer from '../Overlay/OverlayContainer';

type Props = {
  children: Function,
  defaultVisible?: boolean,
  initialState?: Object
};

const Overlay = ({ children, defaultVisible, ...props }: Props) => (
  <OverlayContainer defaultVisible={defaultVisible} {...props}>
    {children}
  </OverlayContainer>
);

Overlay.defaultProps = {
  defaultVisible: false,
  initialState: {}
};

export default Overlay;
