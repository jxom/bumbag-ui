import * as React from 'react';
import * as PropTypes from 'prop-types';
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

export const linkPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
Link.propTypes = linkPropTypes;

export const linkDefaultProps = {
  className: undefined
};
Link.defaultProps = linkDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<LinkProps> = Link;
export default C;
