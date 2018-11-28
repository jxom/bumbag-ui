// @flow
import React, { type Node } from 'react';
import _Link from './styled';

type Props = {
  children: Node,
  className?: string
};

const Link = ({ children, className, ...props }: Props) => (
  <_Link className={className} {...props}>
    {children}
  </_Link>
);

Link.defaultProps = {
  className: undefined
};

export default Link;
