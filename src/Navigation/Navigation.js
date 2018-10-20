// @flow
import React, { type Node } from 'react';

import _Navigation from './styled';

type Props = {
  a11yTitle?: string,
  as?: any,
  children: Node,
  className?: string
};

const Navigation = ({ a11yTitle, as, children, className, ...props }: Props) => (
  <_Navigation as={as} aria-label={a11yTitle} role={as ? 'navigation' : null} {...props}>
    {children}
  </_Navigation>
);

Navigation.defaultProps = {
  a11yTitle: null,
  as: null,
  className: null
};

export default Navigation;
