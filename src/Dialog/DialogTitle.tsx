import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { DialogTitle as _DialogTitle } from './styled';

export type LocalDialogTitleProps = {
  children: React.ReactNode;
  className?: string;
};
export type DialogTitleProps = LocalDialogTitleProps & ReakitBoxProps;

export const DialogTitle: React.FunctionComponent<LocalDialogTitleProps> = ({ children, ...props }) => (
  <_DialogTitle use="h5" isSubHeading {...props}>
    {children}
  </_DialogTitle>
);

DialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
DialogTitle.defaultProps = {
  className: undefined
};

const C: React.FunctionComponent<DialogTitleProps> = DialogTitle;
export default C;
