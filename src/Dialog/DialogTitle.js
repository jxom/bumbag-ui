// @flow
import React, { type Node } from 'react';

import { DialogTitle as _DialogTitle } from './styled';

type Props = {
  children: Node,
  className?: string
};

const DialogTitle = ({ children, ...props }: Props) => (
  <_DialogTitle use="h5" isSubHeading {...props}>
    {children}
  </_DialogTitle>
);

DialogTitle.defaultProps = {
  className: undefined
};

export default DialogTitle;
