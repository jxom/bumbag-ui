// @flow
import React from 'react';
import ReakitOverlay from 'reakit/Overlay';

type Props = {
  children: Function,
  initialState?: Object
};

const Overlay = ({ children, ...props }: Props) => (
  <ReakitOverlay.Container {...props}>
    {({ visible, ...rest }) => children({ isVisible: visible, ...rest })}
  </ReakitOverlay.Container>
);

Overlay.defaultProps = {
  initialState: {}
};

export default Overlay;
