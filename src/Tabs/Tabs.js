// @flow
import React, { type Node } from 'react';
import ReakitTabs from 'reakit/Tabs';

import _Tabs from './styled';
import Tab from './Tab';
import TabPanel from './TabPanel';

type Props = {
  children: Node,
  className?: string,
  /** Visual type of the tab */
  type?: 'default' | 'boxed'
};

const Tabs = ({ children, ...props }: Props) => (
  <_Tabs as={ReakitTabs} {...props}>
    {children}
  </_Tabs>
);

Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
Tabs.Container = ReakitTabs.Container;

Tabs.defaultProps = {
  className: null,
  type: 'default'
};

export default Tabs;
