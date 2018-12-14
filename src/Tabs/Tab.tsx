import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TabsTabProps as ReakitTabProps } from 'reakit/ts/Tabs/TabsTab';

import { Tab as _Tab } from './styled';

export interface LocalTabProps {
  children: React.ReactNode;
  className?: string;
  /** Makes the tab in an active state */
  isActive?: boolean;
  /** A unique identifier for the tab */
  tab: string;
}
export type TabProps = ReakitTabProps & LocalTabProps;

export const Tab: React.FunctionComponent<LocalTabProps> = ({ children, className, isActive, ...props }) => (
  <_Tab {...props} className={classNames(className, { active: isActive })}>
    {children}
  </_Tab>
);

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  tab: PropTypes.string.isRequired
};
Tab.defaultProps = {
  className: undefined,
  isActive: false
};

// @ts-ignore
const C: React.FunctionComponent<TabProps> = Tab;
export default C;
