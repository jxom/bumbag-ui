// @flow
import React from 'react';
import { AlertClose as _AlertClose } from './styled';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

type Props = {
  isAbsolute?: boolean,
  onClickClose?: Function
};

const AlertClose = ({ onClickClose, ...props }: Props) => (
  <_AlertClose kind="link" onClick={onClickClose} {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon aria-hidden="true" icon="cross" />
  </_AlertClose>
);

AlertClose.defaultProps = {
  isAbsolute: false,
  onClickClose: undefined
};

export default AlertClose;
