// @flow
import React from 'react';

import { OverlayShow as _OverlayShow } from './styled';

type Props = {
  children: Function,
  show: Function,
  onClick?: Function
};

const OverlayShow = ({ children, ...props }: Props) => <_OverlayShow {...props}>{children}</_OverlayShow>;

OverlayShow.defaultProps = {
  onClick: undefined
};

export default OverlayShow;
