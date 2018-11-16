// @flow
import React, { type Node } from 'react';

import _Set from './styled';

type Props = {
  className?: string,
  children?: Node,
  spacing?: boolean
};

const Set = ({ children, ...props }: Props) => <_Set {...props}>{children}</_Set>;

Set.defaultProps = {
  className: undefined,
  children: undefined,
  spacing: 'xxsmall'
};

export default Set;
