import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { TabInitialState, TabStateReturn, useTabState } from './TabsState';
import * as styles from './Tabs.styles';

export type LocalTabsProps = {
  baseId?: TabInitialState['baseId'];
  defaultSelectedId?: TabInitialState['selectedId'];
  isFitted?: boolean;
  loop?: TabInitialState['loop'];
  manual?: TabInitialState['manual'];
  mountWhenInactive?: boolean;
  orientation?: TabInitialState['orientation'];
  selectedId?: TabInitialState['selectedId'];
};
export type TabsProps = BoxProps & LocalTabsProps;

export const TabsContext = React.createContext<{
  tabs: Partial<TabStateReturn>;
  mountWhenInactive: boolean;
  overrides: any;
}>({
  mountWhenInactive: true,
  tabs: {},
  overrides: {},
});

const useProps = createHook<TabsProps>(
  (props, { themeKey }) => {
    const {
      baseId,
      children,
      defaultSelectedId,
      loop,
      manual,
      mountWhenInactive,
      orientation,
      overrides,
      selectedId,
      ...restProps
    } = props;
    const boxProps = Box.useProps(restProps);

    let tabs = useTabState({ baseId, loop, manual, orientation, selectedId: defaultSelectedId });
    tabs = {
      ...tabs,
      ...(selectedId
        ? {
            currentId: selectedId,
            selectedId,
          }
        : {}),
    };

    const className = useClassName({
      style: styles.Tabs,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    const contextValue = React.useMemo(() => ({ tabs, mountWhenInactive, overrides }), [
      mountWhenInactive,
      overrides,
      tabs,
    ]);

    return {
      ...boxProps,
      className,
      children: <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>,
    };
  },
  { defaultProps: { mountWhenInactive: true }, themeKey: 'Tabs' }
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
