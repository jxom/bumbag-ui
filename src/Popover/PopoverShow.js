// @flow
import React from 'react';

import { PopoverShow as _PopoverShow } from './styled';

type Props = {
  children: Function,
  onClick?: Function,
  show: Function
};

const PopoverShow = ({ children, ...props }: Props) => <_PopoverShow {...props}>{children}</_PopoverShow>;

PopoverShow.defaultProps = {
  onClick: undefined
};

export default PopoverShow;
