// @flow
import React, { type Node } from 'react';

import { CardContent as _CardContent } from './styled';

type Props = {
  children: Node,
  className?: string
};

const CardContent = ({ children, ...props }: Props) => <_CardContent {...props}>{children}</_CardContent>;

CardContent.defaultProps = {
  className: undefined
};

export default CardContent;
