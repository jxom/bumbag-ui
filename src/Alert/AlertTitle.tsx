import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { AlertTitle as _AlertTitle } from './styled';

export type AlertTitleProps = {
  children: React.ReactNode;
};

const AlertTitle = ({ children, ...props }: AlertTitleProps) => (
  <_AlertTitle use="h6" {...props}>
    {children}
  </_AlertTitle>
);

AlertTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default AlertTitle;
