import * as React from 'react';
import { Box as ReakitBox, TabProps as ReakitTabProps, useTab as useReakitTab } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { TabsContext } from './Tabs';
import { TabsListContext } from './TabsList';
import * as styles from './Tabs.styles';

export type LocalTabsTabProps = {
  tabId?: string;
};
export type TabsTabProps = Partial<ReakitTabProps> & BoxProps & LocalTabsTabProps;

const useProps = createHook<TabsTabProps>(
  (props, { themeKey }) => {
    let {
      baseId,
      currentId,
      disabled,
      first,
      focusable,
      id,
      last,
      manual,
      next,
      orientation,
      overrides,
      panels,
      previous,
      registerItem,
      selectedId,
      select,
      tabId,
      setCurrentId,
      items,
      up,
      down,
      unregisterItem,
      unstable_clickOnEnter,
      unstable_clickOnSpace,
      unstable_hasActiveWidget,
      unstable_idCountRef,
      unstable_moves,
      unstable_virtual,
      ...htmlProps
    } = props;

    const { overrides: tabOverrides, tabs } = React.useContext(TabsContext);
    const tabProps = useReakitTab(
      {
        baseId,
        currentId,
        disabled,
        first,
        focusable,
        id: tabId,
        last,
        manual,
        next,
        orientation,
        panels,
        previous,
        registerItem,
        selectedId,
        select,
        setCurrentId,
        items,
        up,
        down,
        unregisterItem,
        unstable_clickOnEnter,
        unstable_clickOnSpace,
        unstable_hasActiveWidget,
        unstable_idCountRef,
        unstable_moves,
        unstable_virtual,
        ...tabs,
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
        overrides: { ...tabOverrides, ...tabsListContext.overrides, ...overrides },
      },
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Tabs.Tab' }
);

export const Tab = createComponent<TabsTabProps>(
  (props) => {
    const tabProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: tabProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Tabs.Tab',
    },
    themeKey: 'Tabs.Tab',
  }
);
