// @flow
import React from 'react';

import { OverlayHide as _OverlayHide } from './styled';

type Props = {
  children: Function,
  hide: Function,
  onClick?: Function
};

const OverlayHide = ({ children, ...props }: Props) => <_OverlayHide {...props}>{children}</_OverlayHide>;

OverlayHide.defaultProps = {
  onClick: undefined
};

export default OverlayHide;
