import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { TabsPanelProps as ReakitTabPanelProps } from '@jmoxey/reakit/ts/Tabs/TabsPanel';
import { StepContainerSelectors } from '@jmoxey/reakit/ts/Step/StepContainer';

import { TabPanel as _TabPanel } from './styled';

export type LocalTabPanelProps = {
  children: React.ReactNode;
  className?: string;
  /** A unique identifier for the tab */
  tab: string;
  isCurrent: StepContainerSelectors['isCurrent'];
};
export type TabPanelProps = ReakitTabPanelProps & LocalTabPanelProps;

export const TabPanel: React.FunctionComponent<LocalTabPanelProps> = ({ children, ...props }) => (
  <_TabPanel {...props}>{children}</_TabPanel>
);

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tab: PropTypes.string.isRequired,
  isCurrent: PropTypes.func.isRequired
};
TabPanel.defaultProps = {
  className: undefined
};

// @ts-ignore
const C: React.FunctionComponent<TabPanelProps> = TabPanel;
export default C;
