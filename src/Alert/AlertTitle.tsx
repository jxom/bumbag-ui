import * as React from 'react';
import * as PropTypes from 'prop-types';
import { AlertTitle as _AlertTitle } from './styled';

export type AlertTitleProps = {
  children: React.ReactNode;
};

export const AlertTitle = ({ children, ...props }: AlertTitleProps) => (
  <_AlertTitle use="h6" {...props}>
    {children}
  </_AlertTitle>
);

export const alertTitlePropTypes = {
  children: PropTypes.node.isRequired
};
AlertTitle.propTypes = alertTitlePropTypes;

export default AlertTitle;
