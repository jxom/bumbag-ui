// @flow
import React, { type Node } from 'react';
import ReakitOverlay from 'reakit/Overlay';

import _Overlay, { OverlayHide, OverlayShow, OverlayToggle } from './styled';

type Props = {
  as?: any,
  children: Node,
  className?: string
};

const Overlay = ({ children, ...props }: Props) => <_Overlay {...props}>{children}</_Overlay>;

Overlay.Container = ReakitOverlay.Container;
Overlay.Hide = OverlayHide;
Overlay.Show = OverlayShow;
Overlay.Toggle = OverlayToggle;

Overlay.defaultProps = {
  as: null,
  className: null
};

export default Overlay;
