import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HeadingProps as ReakitHeadingProps } from 'reakit/ts/Heading/Heading';

import { ToastTitle as _ToastTitle } from './styled';

export type LocalToastTitleProps = {
  children: React.ReactNode;
};
export type ToastTitleProps = ReakitHeadingProps & LocalToastTitleProps;

export const ToastTitle: React.FunctionComponent<LocalToastTitleProps> = ({ children, ...props }) => (
  <_ToastTitle fontWeight="semibold" use="h6" {...props}>
    {children}
  </_ToastTitle>
);

export const toastTitlePropTypes = {
  children: PropTypes.node.isRequired
};
ToastTitle.propTypes = toastTitlePropTypes;

const C: React.FunctionComponent<ToastTitleProps> = ToastTitle;
export default C;
