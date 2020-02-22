import * as React from 'react';
import { Box as ReakitBox, TabListProps as ReakitTabListProps, useTabList as useReakitTabList } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { TabsContext } from './Tabs';
import * as styles from './styles';

export type LocalTabsListProps = {
  align?: 'left' | 'center' | 'right';
  palette?: string;
  kind?: 'default' | 'boxed' | 'button' | 'unstyled';
};
export type TabsListProps = BoxProps & ReakitTabListProps & LocalTabsListProps;

export const TabsListContext = React.createContext<TabsListProps>({});

const useProps = createHook<TabsListProps>(
  (props, { themeKey, themeKeyOverride }) => {
    let {
      align,
      baseId,
      children,
      id,
      kind,
      orientation,
      overrides,
      palette,
      unstable_setBaseId,
      unstable_idCountRef,
      ...htmlProps
    } = props;

    const { overrides: tabOverrides, tabs } = React.useContext(TabsContext);
    const tabsListProps = useReakitTabList(
      {
        baseId,
        id,
        orientation,
        unstable_setBaseId,
        unstable_idCountRef,
        ...tabs
      },
      htmlProps
    );
    const boxProps = Box.useProps({ ...htmlProps, ...tabsListProps });

    const className = useClassName({
      style: styles.TabsList,
      styleProps: { ...tabs, ...props, overrides: { ...tabOverrides, ...overrides } },
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    const contextValue = React.useMemo(() => ({ align, kind, overrides, palette }), [align, kind, overrides, palette]);

    return {
      ...boxProps,
      className,
      children: <TabsListContext.Provider value={contextValue}>{children}</TabsListContext.Provider>
    };
  },
  { defaultProps: { align: 'left', kind: 'default', palette: 'primary' }, themeKey: 'Tabs.List' }
);

export const TabsList = createComponent<TabsListProps>(
  props => {
    const tabsListProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: tabsListProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Tabs.List'
  }
);
