// @flow
import React, { type Node } from 'react';

import { DialogContent as _DialogContent } from './styled';

type Props = {
  children: Node,
  className?: string
};

const DialogContent = ({ children, ...props }: Props) => <_DialogContent {...props}>{children}</_DialogContent>;

DialogContent.defaultProps = {
  className: undefined
};

export default DialogContent;
