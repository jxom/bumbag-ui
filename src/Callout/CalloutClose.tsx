import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ButtonProps as ReakitButtonProps } from 'reakit/ts/Button/Button';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { Omit } from '../types';
import { CalloutClose as _CalloutClose } from './styled';

export type LocalCalloutCloseProps = {
  onClickClose?: () => void;
};
export type CalloutCloseProps = Omit<ReakitButtonProps, 'children'> & LocalCalloutCloseProps;

export const CalloutClose: React.FunctionComponent<LocalCalloutCloseProps> = ({ onClickClose, ...props }) => (
  <_CalloutClose kind="link" onClick={onClickClose} {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon a11yHidden icon="times" />
  </_CalloutClose>
);

CalloutClose.propTypes = {
  onClickClose: PropTypes.func
};
CalloutClose.defaultProps = {
  onClickClose: undefined
};

// @ts-ignore
const C: React.FunctionComponent<CalloutCloseProps> = CalloutClose;
export default C;
