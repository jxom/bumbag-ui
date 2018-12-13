// @flow
import React from 'react';
import { CalloutClose as _CalloutClose } from './styled';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

type Props = {
  onClickClose?: Function
};

const CalloutClose = ({ onClickClose, ...props }: Props) => (
  <_CalloutClose kind="link" onClick={onClickClose} {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon aria-hidden="true" icon="times" />
  </_CalloutClose>
);

CalloutClose.defaultProps = {
  onClickClose: undefined
};

export default CalloutClose;
