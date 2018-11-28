// @flow
import React, { type Node } from 'react';

import _Label from './styled';

type Props = {
  use?: any,
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
  use: undefined,
  htmlFor: undefined,
  className: undefined
};

export default Label;
