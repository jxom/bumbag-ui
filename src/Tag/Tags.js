// @flow
import React, { type Node } from 'react';

import { Tags as _Tags } from './styled';

type Props = {
  children: Node,
  className?: string
};

const Tags = ({ children, className, ...props }: Props) => (
  <_Tags className={className} {...props}>
    {children}
  </_Tags>
);

Tags.defaultProps = {
  className: null
};

export default Tags;
