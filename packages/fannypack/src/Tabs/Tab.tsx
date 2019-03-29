import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { TabsTabProps as ReakitTabProps } from 'reakit/ts/Tabs/TabsTab';
import { StepContainerActions, StepContainerSelectors } from 'reakit/ts/Step/StepContainer';

import { Tab as _Tab } from './styled';

const noop = () => {};

export type LocalTabProps = {
  children: React.ReactNode;
  className?: string;
  /** Makes the tab in an active state */
  isActive?: boolean;
  /** A unique identifier for the tab */
  tab: string;
  current: number;
  register: StepContainerActions['register'];
  update: StepContainerActions['update'];
  unregister: StepContainerActions['unregister'];
  show: StepContainerActions['show'];
  next: StepContainerActions['next'];
  previous: StepContainerActions['previous'];
  isCurrent: StepContainerSelectors['isCurrent'];
};
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
  tab: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  register: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  unregister: PropTypes.func.isRequired,
  isCurrent: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired
};
Tab.defaultProps = {
  className: undefined,
  isActive: false,
  register: noop,
  update: noop,
  unregister: noop,
  isCurrent: () => false,
  show: noop,
  next: noop,
  previous: noop
};

// @ts-ignore
const C: React.FunctionComponent<TabProps> = Tab;
export default C;
