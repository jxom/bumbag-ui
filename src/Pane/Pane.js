// @flow
import React, { type Node } from 'react';

import _Pane from './styled';

type Props = {
  border: boolean | 'shadow',
  className?: string,
  children?: Node,
  isFullWidth?: boolean
};

const Pane = ({ children, ...props }: Props) => <_Pane {...props}>{children}</_Pane>;

Pane.defaultProps = {
  className: undefined,
  children: undefined,
  isFullWidth: false
};

export default Pane;
