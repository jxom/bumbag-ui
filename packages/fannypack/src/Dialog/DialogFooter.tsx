import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { DialogFooter as _DialogFooter } from './styled';

export type LocalDialogFooterProps = {
  children: React.ReactNode;
  className?: string;
};
export type DialogFooterProps = LocalDialogFooterProps & ReakitBoxProps;

export const DialogFooter: React.FunctionComponent<LocalDialogFooterProps> = ({ children, ...props }) => (
  <_DialogFooter {...props}>{children}</_DialogFooter>
);

DialogFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
DialogFooter.defaultProps = {
  className: undefined
};

const C: React.FunctionComponent<DialogFooterProps> = DialogFooter;
export default C;
