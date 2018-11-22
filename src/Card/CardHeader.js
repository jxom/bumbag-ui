// @flow
import React, { type Node } from 'react';

import { CardHeader as _CardHeader } from './styled';

type Props = {
  children: Node,
  className?: string
};

const CardHeader = ({ children, ...props }: Props) => <_CardHeader {...props}>{children}</_CardHeader>;

CardHeader.defaultProps = {
  className: undefined
};

export default CardHeader;
