// @flow
import React, { type Node } from 'react';

import { Buttons as _Buttons } from './styled';

type Props = {
  children: Node,
  className?: string
};

const Buttons = ({ children, ...props }: Props) => <_Buttons {...props}>{children}</_Buttons>;

Buttons.defaultProps = {
  className: null
};

export default Buttons;
