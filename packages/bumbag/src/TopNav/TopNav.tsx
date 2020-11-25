import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { ThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Navigation, NavigationProps } from '../Navigation';

import * as styles from './TopNav.styles';

export type LocalTopNavProps = {
  defaultSelectedId?: string;
  onChange?: any;
  selectedId?: string;
};
export type TopNavProps = NavigationProps & LocalTopNavProps;

export const TopNavContext = React.createContext<{
  onChangeSelectedId: (id: string) => void;
  selectedId?: string;
  overrides?: ThemeConfig;
}>({
  onChangeSelectedId: () => {},
  selectedId: undefined,
  overrides: {},
});

const useProps = createHook<TopNavProps>(
  (props, { themeKey }) => {
    const { children, defaultSelectedId, onChange, overrides, selectedId: _selectedId, ...restProps } = props;

    const navigationProps = Navigation.useProps(restProps);

    const className = useClassName({
      style: styles.TopNav,
      styleProps: props,
      themeKey,
      prevClassName: navigationProps.className,
    });

    const [selectedId, setSelectedId] = React.useState(defaultSelectedId || '');

    const handleChangeSelectedId = React.useCallback(
      (id) => {
        if (onChange) {
          onChange(id);
        } else {
          setSelectedId(id || '');
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
      children: <TopNavContext.Provider value={contextValue}>{children}</TopNavContext.Provider>,
    };
  },
  { themeKey: 'TopNav' }
);

export const TopNav = createComponent<TopNavProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'TopNav',
    },
    themeKey: 'TopNav',
  }
);
