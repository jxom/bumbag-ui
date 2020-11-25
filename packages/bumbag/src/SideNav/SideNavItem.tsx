import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import buildClassNames from 'classnames';

import { bindFns, useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { ListItem, ListItemProps } from '../List';

import { SideNavContext } from './SideNav';
import { SideNavLevelContext } from './SideNavLevel';
import * as styles from './SideNav.styles';

export type LocalSideNavItemProps = {
  href?: string;
  isActive?: boolean;
  navId?: string;
};
export type SideNavItemProps = ListItemProps & LocalSideNavItemProps;

const useProps = createHook<SideNavItemProps>(
  (props, { themeKey }) => {
    const { children, href, isActive, navId, onClick, overrides, ...restProps } = props;
    const listItemProps = ListItem.useProps(restProps);

    const { onChangeSelectedId, selectedId, overrides: sideNavOverrides } = React.useContext(SideNavContext);
    const { level } = React.useContext(SideNavLevelContext);

    const className = useClassName({
      style: styles.SideNavItem,
      styleProps: {
        ...props,
        isActive: typeof isActive === 'boolean' ? isActive : selectedId === navId,
        level,
        overrides: { ...sideNavOverrides, ...overrides },
      },
      themeKey,
    });

    return {
      ...listItemProps,
      className: buildClassNames(
        listItemProps.className,
        href || React.isValidElement(children) ? undefined : className
      ),
      onClick: href || React.isValidElement(children) ? undefined : bindFns(onClick, () => onChangeSelectedId(navId)),
      children:
        href || React.isValidElement(children)
          ? /*
            // @ts-ignore */
            React.cloneElement(href ? <a href={href}>{children}</a> : children, {
              className,
              onClick: bindFns(onClick, () => onChangeSelectedId(navId)),
            })
          : children,
    };
  },
  { themeKey: 'SideNav.Item' }
);

export const SideNavItem = createComponent<SideNavItemProps>(
  (props) => {
    const sideNavItemProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: sideNavItemProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'SideNav.Item',
    },
    defaultProps: {
      use: 'li',
    },
    themeKey: 'SideNav.Item',
  }
);
