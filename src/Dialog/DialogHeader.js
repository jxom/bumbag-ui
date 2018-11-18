// @flow
import React, { type Node } from 'react';

import { DialogHeader as _DialogHeader } from './styled';

type Props = {
  children: Node,
  className?: string
};

const DialogHeader = ({ children, ...props }: Props) => <_DialogHeader {...props}>{children}</_DialogHeader>;

DialogHeader.defaultProps = {
  className: undefined
};

export default DialogHeader;
