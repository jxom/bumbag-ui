// @flow
import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
// @ts-ignore
import ReakitTabs from 'reakit/Tabs';
import { TabsProps as ReakitTabsProps } from 'reakit/ts/Tabs/Tabs';

import _Tabs from './styled';
import Tab, { TabProps } from './Tab';
import TabPanel, { TabPanelProps } from './TabPanel';

export interface LocalTabsProps {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  className?: string;
  isFitted?: boolean;
  /** Visual type of the tab */
  type?: 'default' | 'boxed';
}
export type TabsProps = ReakitTabsProps & LocalTabsProps;

export interface TabsComponents {
  Tab: React.FunctionComponent<TabProps>;
  Panel: React.FunctionComponent<TabPanelProps>;
  Container: React.FunctionComponent<{ children: (...args: any) => React.ReactNode }>;
}

export const Tabs: React.FunctionComponent<LocalTabsProps> & TabsComponents = ({ children, ...props }) => (
  <_Tabs use={ReakitTabs} {...props}>
    {children}
  </_Tabs>
);

Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
Tabs.Container = ReakitTabs.Container;

Tabs.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isFitted: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'boxed'])
};
Tabs.defaultProps = {
  align: undefined,
  className: undefined,
  isFitted: false,
  type: 'default'
};

const C: React.FunctionComponent<TabsProps> & TabsComponents = Tabs;
export default C;
