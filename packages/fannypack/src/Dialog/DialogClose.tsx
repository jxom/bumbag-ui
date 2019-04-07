import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ButtonProps } from '../Button/Button';
import Icon from '../Icon';
import { Omit } from '../types';
import VisuallyHidden from '../VisuallyHidden';
import { DialogClose as _DialogClose } from './styled';

export type LocalDialogCloseProps = {
  className?: string;
};
export type DialogCloseProps = LocalDialogCloseProps & Omit<ButtonProps, 'children'>;

export const DialogClose: React.FunctionComponent<LocalDialogCloseProps> = props => (
  <_DialogClose kind="link" {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon a11yHidden icon="times" />
  </_DialogClose>
);

export const dialogClosePropTypes = {
  className: PropTypes.string
};
DialogClose.propTypes = dialogClosePropTypes;

export const dialogCloseDefaultProps = {
  className: undefined
};
DialogClose.defaultProps = dialogCloseDefaultProps;

const C: React.FunctionComponent<DialogCloseProps> = DialogClose;
export default C;
