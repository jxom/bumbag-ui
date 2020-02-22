import * as React from 'react';
import { Box as ReakitBox, TabProps as ReakitTabProps, useTab as useReakitTab } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { TabsContext } from './Tabs';
import { TabsListContext } from './TabsList';
import * as styles from './styles';

export type LocalTabsTabProps = {
  tabId?: string;
};
export type TabsTabProps = Partial<ReakitTabProps> & BoxProps & LocalTabsTabProps;

const useProps = createHook<TabsTabProps>(
  (props, { themeKey, themeKeyOverride }) => {
    let {
      baseId,
      currentId,
      disabled,
      first,
      focusable,
      id,
      last,
      manual,
      move,
      next,
      orientation,
      overrides,
      previous,
      register,
      selectedId,
      select,
      tabId,
      stops,
      unregister,
      unstable_clickOnEnter,
      unstable_clickOnSpace,
      unstable_idCountRef,
      unstable_moves,
      ...htmlProps
    } = props;

    const { overrides: tabOverrides, tabs } = React.useContext(TabsContext);
    const tabProps = useReakitTab(
      {
        baseId: 'test',
        currentId,
        disabled,
        first,
        focusable,
        id,
        last,
        manual,
        move,
        next,
        orientation,
        previous,
        register,
        selectedId,
        select,
        stopId: tabId,
        stops,
        unregister,
        unstable_clickOnEnter,
        unstable_clickOnSpace,
        unstable_idCountRef,
        unstable_moves,
        ...tabs
      },
      htmlProps
    );
    const boxProps = Box.useProps({ ...htmlProps, ...tabProps });

    const tabsListContext = React.useContext(TabsListContext);

    const className = useClassName({
      style: styles.Tab,
      styleProps: {
        ...tabs,
        ...props,
        ...tabsListContext,
        overrides: { ...tabOverrides, ...tabsListContext.overrides, ...overrides }
      },
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Tabs.Tab' }
);

export const Tab = createComponent<TabsTabProps>(
  props => {
    const tabProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: tabProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Tabs.Tab'
  }
);
