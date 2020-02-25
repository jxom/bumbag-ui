import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import buildClassNames from 'classnames';

import { bindFns, useClassName, createComponent, createElement, createHook } from '../utils';
import { ListItem, ListItemProps } from '../List';

import { SideNavContext } from './SideNav';
import { SideNavLevelContext } from './SideNavLevel';
import * as styles from './styles';

export type LocalSideNavItemProps = {
  href?: string;
  isActive?: boolean;
  navId?: string;
};
export type SideNavItemProps = ListItemProps & LocalSideNavItemProps;

const useProps = createHook<SideNavItemProps>(
  (props, { themeKey, themeKeyOverride }) => {
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
        overrides: { ...sideNavOverrides, ...overrides }
      },
      themeKey,
      themeKeyOverride
    });

    return {
      ...listItemProps,
      className: buildClassNames(listItemProps.className, href ? undefined : className),
      onClick: href ? undefined : bindFns(onClick, () => onChangeSelectedId(navId)),
      children: href ? (
        <a className={className} href={href} onClick={bindFns(onClick, () => onChangeSelectedId(navId))}>
          {children}
        </a>
      ) : (
        children
      )
    };
  },
  { themeKey: 'SideNav.Item' }
);

export const SideNavItem = createComponent<SideNavItemProps>(
  props => {
    const sideNavItemProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: sideNavItemProps
    });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'li'
    },
    themeKey: 'SideNav.Item'
  }
);
