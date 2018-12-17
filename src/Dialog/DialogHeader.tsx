import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from '@jmoxey/reakit/ts';

import { DialogHeader as _DialogHeader } from './styled';

export type LocalDialogHeaderProps = {
  children: React.ReactNode;
  className?: string;
};
export type DialogHeaderProps = LocalDialogHeaderProps & ReakitBoxProps;

export const DialogHeader: React.FunctionComponent<LocalDialogHeaderProps> = ({ children, ...props }) => (
  <_DialogHeader {...props}>{children}</_DialogHeader>
);

DialogHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
DialogHeader.defaultProps = {
  className: undefined
};

const C: React.FunctionComponent<DialogHeaderProps> = DialogHeader;
export default C;
