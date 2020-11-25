import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { ThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Navigation, NavigationProps } from '../Navigation';

import * as styles from './SideNav.styles';

export type LocalSideNavProps = {
  /** Sets the default selected nav item. */
  defaultSelectedId?: string;
  /** Function to invoke when the nav item is changed. */
  onChange?: any;
  /** Sets the selected nav item. */
  selectedId?: string;
};
export type SideNavProps = NavigationProps & LocalSideNavProps;

export const SideNavContext = React.createContext<{
  onChangeSelectedId: (id: string) => void;
  selectedId?: string;
  overrides?: ThemeConfig;
}>({
  onChangeSelectedId: () => {},
  selectedId: undefined,
  overrides: {},
});

const useProps = createHook<SideNavProps>(
  (props, { themeKey }) => {
    const { children, defaultSelectedId, onChange, overrides, selectedId: _selectedId, ...restProps } = props;

    const navigationProps = Navigation.useProps(restProps);

    const className = useClassName({
      style: styles.SideNav,
      styleProps: props,
      themeKey,
      prevClassName: navigationProps.className,
    });

    const [selectedId, setSelectedId] = React.useState(defaultSelectedId);

    const handleChangeSelectedId = React.useCallback(
      (id) => {
        if (onChange) {
          onChange(id);
        } else {
          setSelectedId(id);
        }
      },
      [onChange]
    );

    const contextValue = React.useMemo(
      () => ({ onChangeSelectedId: handleChangeSelectedId, selectedId: _selectedId || selectedId, overrides }),
      [_selectedId, handleChangeSelectedId, overrides, selectedId]
    );

    return {
      ...navigationProps,
      className,
      children: <SideNavContext.Provider value={contextValue}>{children}</SideNavContext.Provider>,
    };
  },
  { themeKey: 'SideNav' }
);

export const SideNav = createComponent<SideNavProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'SideNav',
    },
    themeKey: 'SideNav',
  }
);
