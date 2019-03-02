import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ButtonProps } from '../Button/Button';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { Omit } from '../types';
import { AlertClose as _AlertClose } from './styled';

export type LocalAlertCloseProps = {
  isAbsolute?: boolean;
  onClickClose?: ButtonProps['onClick'];
};
export type AlertCloseProps = Omit<ButtonProps, 'children'> & LocalAlertCloseProps;

export const AlertClose: React.FunctionComponent<LocalAlertCloseProps> = ({ onClickClose, ...props }) => (
  <_AlertClose kind="link" onClick={onClickClose} {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon a11yHidden icon="times" />
  </_AlertClose>
);

export const alertClosePropTypes = {
  isAbsolute: PropTypes.bool,
  onClickClose: PropTypes.func
};
AlertClose.propTypes = alertClosePropTypes;

export const alertCloseDefaultProps = {
  isAbsolute: false,
  onClickClose: undefined
};
AlertClose.defaultProps = alertCloseDefaultProps;

const C: React.FunctionComponent<AlertCloseProps> = AlertClose;
export default C;
