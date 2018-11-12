// @flow
import React, { type Node } from 'react';
import { AlertTitle as _AlertTitle } from './styled';

type Props = {
  children: Node
};

const AlertTitle = ({ children, ...props }: Props) => (
  <_AlertTitle as="h6" isSemiBold {...props}>
    {children}
  </_AlertTitle>
);

export default AlertTitle;
