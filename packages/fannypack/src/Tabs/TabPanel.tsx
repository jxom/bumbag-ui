import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TabsPanelProps as ReakitTabPanelProps } from 'reakit/ts/Tabs/TabsPanel';
import { StepContainerSelectors } from 'reakit/ts/Step/StepContainer';

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

export const tabPanelPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tab: PropTypes.string.isRequired,
  isCurrent: PropTypes.func.isRequired
};
TabPanel.propTypes = tabPanelPropTypes;

export const tabPanelDefaultProps = {
  className: undefined
};
TabPanel.defaultProps = tabPanelDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<TabPanelProps> = TabPanel;
export default C;
