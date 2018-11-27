// @flow
import React from 'react';
import ReakitOverlay from 'reakit/Overlay';

type Props = {
  children: Function,
  initialState?: Object
};

const Overlay = ({ children, ...props }: Props) => (
  <ReakitOverlay.Container {...props}>{children}</ReakitOverlay.Container>
);

Overlay.defaultProps = {
  initialState: {}
};

export default Overlay;
