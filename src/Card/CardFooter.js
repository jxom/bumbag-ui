// @flow
import React, { type Node } from 'react';

import { CardFooter as _CardFooter } from './styled';

type Props = {
  children: Node,
  className?: string
};

const CardFooter = ({ children, ...props }: Props) => <_CardFooter {...props}>{children}</_CardFooter>;

CardFooter.defaultProps = {
  className: undefined
};

export default CardFooter;
