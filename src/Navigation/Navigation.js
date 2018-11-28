// @flow
import React, { type Node } from 'react';

import _Navigation from './styled';

type Props = {
  a11yTitle?: string,
  use?: any,
  children: Node,
  className?: string
};

const Navigation = ({ a11yTitle, children, className, ...props }: Props) => (
  <_Navigation aria-label={a11yTitle} {...props} role={props.use ? 'navigation' : null}>
    {children}
  </_Navigation>
);

Navigation.defaultProps = {
  a11yTitle: undefined,
  use: undefined,
  className: undefined
};

export default Navigation;
