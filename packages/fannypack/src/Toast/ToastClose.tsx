import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ButtonProps } from '../Button/Button';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { Omit } from '../types';
import { ToastClose as _ToastClose } from './styled';

export type LocalToastCloseProps = {
  isAbsolute?: boolean;
  onClickClose?: ButtonProps['onClick'];
};
export type ToastCloseProps = Omit<ButtonProps, 'children'> & LocalToastCloseProps;

export const ToastClose: React.FunctionComponent<LocalToastCloseProps> = ({ onClickClose, ...props }) => (
  <_ToastClose kind="link" onClick={onClickClose} {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon a11yHidden icon="times" />
  </_ToastClose>
);

export const toastClosePropTypes = {
  isAbsolute: PropTypes.bool,
  onClickClose: PropTypes.func
};
ToastClose.propTypes = toastClosePropTypes;

export const toastCloseDefaultProps = {
  isAbsolute: false,
  onClickClose: undefined
};
ToastClose.defaultProps = toastCloseDefaultProps;

const C: React.FunctionComponent<ToastCloseProps> = ToastClose;
export default C;
