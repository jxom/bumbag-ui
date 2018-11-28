// @flow
import React from 'react';
import ReakitOverlay from 'reakit/Overlay';

type Props = {
  children: Function,
  defaultVisible?: boolean,
  initialState?: Object
};

const Overlay = ({ children, defaultVisible, initialState, ...props }: Props) => (
  <ReakitOverlay.Container initialState={{ visible: defaultVisible, ...initialState }} {...props}>
    {({ visible, ...rest }) => children({ isVisible: visible, ...rest })}
  </ReakitOverlay.Container>
);

Overlay.defaultProps = {
  defaultVisible: false,
  initialState: {}
};

export default Overlay;
