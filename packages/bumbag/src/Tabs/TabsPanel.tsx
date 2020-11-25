import * as React from 'react';
import { Box as ReakitBox, TabPanelProps as ReakitTabPanelProps, useTabPanel as useReakitTabPanel } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { TabsContext } from './Tabs';
import * as styles from './Tabs.styles';

export type LocalTabsPanelProps = {
  tabId?: string;
};
export type TabsPanelProps = BoxProps & Partial<ReakitTabPanelProps> & LocalTabsPanelProps;

const useProps = createHook<TabsPanelProps>(
  (props, { themeKey }) => {
    let {
      baseId,
      id,
      overrides,
      items,
      panels,
      selectedId,
      tabId,
      registerPanel,
      unregisterPanel,
      visible,
      animating,
      animated,
      stopAnimation,
      unstable_idCountRef,
      ...htmlProps
    } = props;

    const { overrides: tabOverrides, tabs } = React.useContext(TabsContext);
    const tabsPanelProps = useReakitTabPanel(
      {
        baseId,
        id,
        items,
        panels,
        selectedId,
        tabId,
        registerPanel,
        unregisterPanel,
        animating,
        animated,
        stopAnimation,
        unstable_idCountRef,
        ...tabs,
        visible: tabs ? tabId === tabs.selectedId : tabId === selectedId,
      },
      htmlProps
    );
    const boxProps = Box.useProps({ ...htmlProps, ...tabsPanelProps });

    const className = useClassName({
      style: styles.TabsPanel,
      styleProps: { props, overrides: { ...tabOverrides, ...overrides } },
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Tabs.Panel' }
);

export const TabsPanel = createComponent<TabsPanelProps>(
  (props) => {
    const tabsPanelProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: tabsPanelProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Tabs.Panel',
    },
    themeKey: 'Tabs.Panel',
  }
);
