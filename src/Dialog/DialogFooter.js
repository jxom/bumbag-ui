// @flow
import React, { type Node } from 'react';

import { DialogFooter as _DialogFooter } from './styled';

type Props = {
  children: Node,
  className?: string
};

const DialogFooter = ({ children, ...props }: Props) => <_DialogFooter {...props}>{children}</_DialogFooter>;

DialogFooter.defaultProps = {
  className: undefined
};

export default DialogFooter;
