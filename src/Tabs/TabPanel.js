// @flow
import React, { type Node } from 'react';

import { TabPanel as _TabPanel } from './styled';

type Props = {
  children: Node,
  className?: string,
  /** A unique identifier for the tab */
  tab: string
};

const TabPanel = ({ children, ...props }: Props) => <_TabPanel {...props}>{children}</_TabPanel>;

TabPanel.defaultProps = {
  className: null,
  isActive: false
};

export default TabPanel;
