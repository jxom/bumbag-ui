import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { LinkProps as ReakitLinkProps } from 'reakit/ts';

import _Link from './styled';

export type LocalLinkProps = {
  children: React.ReactNode;
  className?: string;
};
export type LinkProps = LocalLinkProps & ReakitLinkProps;

export const Link: React.FunctionComponent<LocalLinkProps> = ({ children, className, ...props }) => (
  <_Link className={className} {...props}>
    {children}
  </_Link>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
Link.defaultProps = {
  className: undefined
};

// @ts-ignore
const C: React.FunctionComponent<LinkProps> = Link;
export default C;
