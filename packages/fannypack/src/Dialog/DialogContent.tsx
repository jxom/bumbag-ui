import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { DialogContent as _DialogContent } from './styled';

export type LocalDialogContentProps = {
  children: React.ReactNode;
  className?: string;
  hasScroll?: boolean;
};
export type DialogContentProps = LocalDialogContentProps & ReakitBoxProps;

export const DialogContent: React.FunctionComponent<LocalDialogContentProps> = ({ children, ...props }) => (
  <_DialogContent {...props}>{children}</_DialogContent>
);

export const dialogContentPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasScroll: PropTypes.bool
};
DialogContent.propTypes = dialogContentPropTypes;

export const dialogContentDefaultProps = {
  className: undefined,
  hasScroll: false
};
DialogContent.defaultProps = dialogContentDefaultProps;

const C: React.FunctionComponent<DialogContentProps> = DialogContent;
export default C;
