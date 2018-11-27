// @flow
import React from 'react';

import { OverlayToggle as _OverlayToggle } from './styled';

type Props = {
  children: Function,
  toggle: Function,
  onClick?: Function
};

const OverlayToggle = ({ children, ...props }: Props) => <_OverlayToggle {...props}>{children}</_OverlayToggle>;

OverlayToggle.defaultProps = {
  onClick: undefined
};

export default OverlayToggle;
