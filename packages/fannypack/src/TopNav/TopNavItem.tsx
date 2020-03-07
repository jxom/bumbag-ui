import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import buildClassNames from 'classnames';

import { bindFns, useClassName, createComponent, createElement, createHook } from '../utils';
import { ListItem, ListItemProps } from '../List';

import { TopNavContext } from './TopNav';
import * as styles from './styles';

export type LocalTopNavItemProps = {
  href?: string;
  isActive?: boolean;
  navId?: string;
};
export type TopNavItemProps = ListItemProps & LocalTopNavItemProps;

const useProps = createHook<TopNavItemProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { children, href, isActive, navId, onClick, overrides, ...restProps } = props;
    const listItemProps = ListItem.useProps(restProps);

    const { onChangeSelectedId, selectedId, overrides: topNavOverrides } = React.useContext(TopNavContext);

    const className = useClassName({
      style: styles.TopNavItem,
      styleProps: {
        ...props,
        isActive: typeof isActive === 'boolean' ? isActive : selectedId === navId,
        overrides: { ...topNavOverrides, ...overrides }
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
  { themeKey: 'TopNav.Item' }
);

export const TopNavItem = createComponent<TopNavItemProps>(
  props => {
    const TopNavItemProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: TopNavItemProps
    });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'li'
    },
    themeKey: 'TopNav.Item'
  }
);
