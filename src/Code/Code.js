// @flow
import React, { type Node } from 'react';

import _Code from './styled';

type Props = {
  children: Node,
  className?: string,
  codeClassName?: string,
  isBlock?: boolean
};

const Code = ({ children, className, codeClassName, isBlock, ...props }: Props) => (
  <_Code className={className} codeClassName={codeClassName} block={isBlock} {...props}>
    {children}
  </_Code>
);

Code.defaultProps = {
  className: null,
  codeClassName: null,
  isBlock: false
};

export default Code;
