import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { DialogContent as _DialogContent } from './styled';

export interface LocalDialogContentProps {
  children: React.ReactNode;
  className?: string;
}
export type DialogContentProps = LocalDialogContentProps & ReakitBoxProps;

export const DialogContent: React.FunctionComponent<LocalDialogContentProps> = ({ children, ...props }) => (
  <_DialogContent {...props}>{children}</_DialogContent>
);

DialogContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
DialogContent.defaultProps = {
  className: undefined
};

const C: React.FunctionComponent<DialogContentProps> = DialogContent;
export default C;
