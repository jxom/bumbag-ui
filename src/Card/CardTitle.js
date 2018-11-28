// @flow
import React, { type Node } from 'react';

import { CardTitle as _CardTitle } from './styled';

type Props = {
  children: Node,
  className?: string
};

const DialogTitle = ({ children, ...props }: Props) => (
  <_CardTitle use="h5" isSubHeading {...props}>
    {children}
  </_CardTitle>
);

DialogTitle.defaultProps = {
  className: undefined
};

export default DialogTitle;
