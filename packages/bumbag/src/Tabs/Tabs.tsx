import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { TabInitialState, TabStateReturn, useTabState } from './TabsState';
import * as styles from './Tabs.styles';

export type LocalTabsProps = {
  baseId?: TabInitialState['baseId'];
  isFitted?: boolean;
  loop?: TabInitialState['loop'];
  manual?: TabInitialState['manual'];
  orientation?: TabInitialState['orientation'];
  selectedId?: TabInitialState['selectedId'];
};
export type TabsProps = BoxProps & LocalTabsProps;

export const TabsContext = React.createContext<{ tabs: Partial<TabStateReturn>; overrides: any }>({
  tabs: {},
  overrides: {},
});

const useProps = createHook<TabsProps>(
  (props, { themeKey }) => {
    const { baseId, children, loop, manual, orientation, overrides, selectedId, ...restProps } = props;
    const boxProps = Box.useProps(restProps);

    const tabs = useTabState({ baseId, loop, manual, orientation, selectedId });

    const className = useClassName({
      style: styles.Tabs,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    const contextValue = React.useMemo(() => ({ tabs, overrides }), [overrides, tabs]);

    return {
      ...boxProps,
      className,
      children: <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>,
    };
  },
  { themeKey: 'Tabs' }
);

export const Tabs = createComponent<TabsProps>(
  (props) => {
    const tabsProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: tabsProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Tabs',
    },
    themeKey: 'Tabs',
  }
);
