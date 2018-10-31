// @flow
import React, { type Node } from 'react';

import _Label from './styled';

type Props = {
  as?: any,
  children: Node,
  className?: string,
  htmlFor?: string
};

const Label = ({ children, className, ...props }: Props) => (
  <_Label className={className} fontWeight="600" marginBottom="xxxsmall" {...props}>
    {children}
  </_Label>
);

Label.defaultProps = {
  as: null,
  htmlFor: null,
  className: null
};

export default Label;
