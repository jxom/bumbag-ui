import * as React from 'react';
import { Box as ReakitBox, TabListProps as ReakitTabListProps, useTabList as useReakitTabList } from 'reakit';

import { Palette } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { TabsContext } from './Tabs';
import * as styles from './Tabs.styles';

export type LocalTabsListProps = {
  align?: 'left' | 'center' | 'right';
  palette?: Palette;
};
export type TabsListProps = BoxProps & Partial<ReakitTabListProps> & LocalTabsListProps;

export const TabsListContext = React.createContext<TabsListProps>({});

const useProps = createHook<TabsListProps>(
  (props, { themeKey }) => {
    let {
      align,
      baseId,
      children,
      id,
      variant,
      overrides,
      palette,
      disabled,
      focusable,
      first,
      last,
      move,
      currentId,
      wrap,
      groups,
      items,
      setCurrentId,
      orientation,
      unstable_virtual,
      unstable_moves,
      ...htmlProps
    } = props;

    const { overrides: tabOverrides, tabs } = React.useContext(TabsContext);
    const tabsListProps = useReakitTabList(
      {
        baseId,
        disabled,
        focusable,
        first,
        last,
        move,
        currentId,
        orientation,
        wrap,
        groups,
        items,
        setCurrentId,
        unstable_virtual,
        unstable_moves,
        ...tabs,
      },
      htmlProps
    );
    const boxProps = Box.useProps({ ...htmlProps, ...tabsListProps });

    const className = useClassName({
      style: styles.TabsList,
      styleProps: { ...tabs, ...props, overrides: { ...tabOverrides, ...overrides } },
      themeKey,
      prevClassName: boxProps.className,
    });

    const contextValue = React.useMemo(() => ({ align, variant, overrides, palette }), [
      align,
      variant,
      overrides,
      palette,
    ]);

    return {
      ...boxProps,
      className,
      children: <TabsListContext.Provider value={contextValue}>{children}</TabsListContext.Provider>,
    };
  },
  { defaultProps: { align: 'left', variant: 'default', palette: 'primary' }, themeKey: 'Tabs.List' }
);

export const TabsList = createComponent<TabsListProps>(
  (props) => {
    const tabsListProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: tabsListProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Tabs.List',
    },
    themeKey: 'Tabs.List',
  }
);
