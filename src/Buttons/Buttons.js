// @flow
import React, { type Node } from 'react';

import _Buttons from './styled';

type Props = {
  children: Node,
  className?: string,
  isGrouped?: boolean
};

const Buttons = ({ children, className, isGrouped, ...props }: Props) => (
  <_Buttons className={className} isGrouped={isGrouped} {...props}>
    {children}
  </_Buttons>
);

Buttons.defaultProps = {
  className: null,
  isGrouped: false
};

export default Buttons;
