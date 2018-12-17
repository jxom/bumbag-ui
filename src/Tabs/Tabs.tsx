// @flow
import * as React from 'react';
import * as PropTypes from 'prop-types';
import ReakitTabs from '@jmoxey/reakit/Tabs';
import { TabsProps as ReakitTabsProps } from '@jmoxey/reakit/ts/Tabs/Tabs';

import _Tabs from './styled';
import Tab, { TabProps } from './Tab';
import TabPanel, { TabPanelProps } from './TabPanel';

export type LocalTabsProps = {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  className?: string;
  isFitted?: boolean;
  /** Visual type of the tab */
  type?: 'default' | 'boxed';
};
export type TabsProps = ReakitTabsProps & LocalTabsProps;

export type TabsComponents = {
  Tab: React.FunctionComponent<TabProps>;
  Panel: React.FunctionComponent<TabPanelProps>;
  Container: React.FunctionComponent<{ children: (...args: any) => React.ReactNode }>;
};

export const Tabs: React.FunctionComponent<LocalTabsProps> & TabsComponents = ({ children, ...props }) => (
  <_Tabs use={ReakitTabs} {...props}>
    {children}
  </_Tabs>
);

Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
Tabs.Container = ReakitTabs.Container;

Tabs.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']) as PropTypes.Validator<LocalTabsProps['align']>,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isFitted: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'boxed']) as PropTypes.Validator<LocalTabsProps['type']>
};
Tabs.defaultProps = {
  align: undefined,
  className: undefined,
  isFitted: false,
  type: 'default'
};

const C: React.FunctionComponent<TabsProps> & TabsComponents = Tabs;
export default C;
