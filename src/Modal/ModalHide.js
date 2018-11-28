// @flow
import React from 'react';

import { ModalHide as _ModalHide } from './styled';

type Props = {
  children: Function,
  hide: Function,
  onClick?: Function
};

const ModalHide = ({ children, ...props }: Props) => <_ModalHide {...props}>{children}</_ModalHide>;

ModalHide.defaultProps = {
  onClick: undefined
};

export default ModalHide;
