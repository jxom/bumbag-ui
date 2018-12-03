// @flow
import React from 'react';

import { PopoverHide as _PopoverHide } from './styled';

type Props = {
  children: Function,
  hide: Function,
  onClick?: Function
};

const PopoverHide = ({ children, ...props }: Props) => <_PopoverHide {...props}>{children}</_PopoverHide>;

PopoverHide.defaultProps = {
  onClick: undefined
};

export default PopoverHide;
