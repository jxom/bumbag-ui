import * as styles from './Tabs.styles';
import { Tab } from './Tab';
import { Tabs as _Tabs } from './Tabs';
import { TabsList } from './TabsList';
import { TabsPanel } from './TabsPanel';
import { useTabState, TabState } from './TabsState';

export * from './Tab';
export * from './Tabs';
export * from './TabsList';
export * from './TabsPanel';
export const Tabs = Object.assign(_Tabs, {
  Tab,
  List: TabsList,
  Panel: TabsPanel,
  useState: useTabState,
  State: TabState,
});
export { styles as tabsStyles };
