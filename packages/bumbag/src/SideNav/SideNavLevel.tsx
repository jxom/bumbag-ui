import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';
import { List, ListProps } from '../List';

import { SideNavContext } from './SideNav';
import * as styles from './SideNav.styles';

export type LocalSideNavLevelProps = {
  title?: React.ReactElement<any> | string;
};
export type SideNavLevelProps = ListProps & LocalSideNavLevelProps;

export const SideNavLevelContext = React.createContext({ level: 0 });

const useProps = createHook<SideNavLevelProps>(
  (props, { themeKey }) => {
    const { children, overrides, title, ...restProps } = props;

    const listProps = List.useProps(restProps);

    const { overrides: sideNavOverrides } = React.useContext(SideNavContext);
    const { level } = React.useContext(SideNavLevelContext);

    const className = useClassName({
      style: styles.SideNavLevel,
      styleProps: { ...props, level, overrides: { ...sideNavOverrides, ...overrides } },
      themeKey,
      prevClassName: listProps.className,
    });
    const titleClassName = useClassName({
      style: styles.SideNavLevelTitle,
      styleProps: { ...props, level, overrides: { ...sideNavOverrides, ...overrides } },
      themeKey,
      themeKeySuffix: 'Title',
    });

    const contextValue = React.useMemo(() => ({ level: level + 1 }), [level]);

    const titleId = useUniqueId();

    return {
      ...listProps,
      'aria-labelledby': title ? titleId : undefined,
      className,
      children: (
        <SideNavLevelContext.Provider value={contextValue}>
          {title && (
            <Box id={titleId} className={titleClassName}>
              {title}
            </Box>
          )}
          {children}
        </SideNavLevelContext.Provider>
      ),
    };
  },
  { themeKey: 'SideNav.Level' }
);

export const SideNavLevel = createComponent<SideNavLevelProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'SideNav.Level',
    },
    defaultProps: {
      use: 'ul',
    },
    themeKey: 'SideNav.Level',
  }
);
