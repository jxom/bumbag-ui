// @flow
import React from 'react';

import { ModalShow as _ModalShow } from './styled';

type Props = {
  children: Function,
  show: Function,
  onClick?: Function
};

const ModalShow = ({ children, ...props }: Props) => <_ModalShow {...props}>{children}</_ModalShow>;

ModalShow.defaultProps = {
  onClick: undefined
};

export default ModalShow;
