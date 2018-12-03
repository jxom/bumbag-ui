// @flow
import React from 'react';

import { PopoverToggle as _PopoverToggle } from './styled';

type Props = {
  children: Function,
  toggle: Function,
  onClick?: Function
};

const PopoverToggle = ({ children, ...props }: Props) => <_PopoverToggle {...props}>{children}</_PopoverToggle>;

PopoverToggle.defaultProps = {
  onClick: undefined
};

export default PopoverToggle;
