// @flow
import React, { type Node } from 'react';
import _Divider from './styled';

type Props = {
  children: Node,
  className?: string,
  content?: string,
  isVertical?: boolean
};

const Divider = ({ children, className, content, isVertical, ...props }: Props) => (
  <_Divider className={className} content={content} vertical={isVertical} {...props}>
    {children}
  </_Divider>
);

Divider.defaultProps = {
  className: undefined,
  content: undefined,
  isVertical: false
};

export default Divider;
