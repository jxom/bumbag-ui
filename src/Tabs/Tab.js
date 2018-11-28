// @flow
import React, { type Node } from 'react';
import classNames from 'classnames';

import { Tab as _Tab } from './styled';

type Props = {
  children: Node,
  className?: string,
  /** Makes the tab in an active state */
  isActive?: boolean,
  /** A unique identifier for the tab */
  tab: string
};

const Tab = ({ children, className, isActive, ...props }: Props) => (
  <_Tab {...props} className={classNames(className, { active: isActive })}>
    {children}
  </_Tab>
);

Tab.defaultProps = {
  className: undefined,
  isActive: false,
  type: 'default'
};

export default Tab;
