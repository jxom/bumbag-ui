import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';
import { Rover } from '../Rover';

import { MenuContext } from './Menu';
import * as styles from './Menu.styles';

export type LocalMenuItemProps = {
  /** Icon that appears on the right side of the menu item. */
  iconAfter?: IconProps['icon'];
  iconAfterProps?: Omit<IconProps, 'icon'>;
  /** Icon that appears on the left side of the menu item. */
  iconBefore?: IconProps['icon'];
  iconBeforeProps?: Omit<IconProps, 'icon'>;
};
export type MenuItemProps = BoxProps & LocalMenuItemProps;

const useProps = createHook<MenuItemProps>(
  (props, { themeKey }) => {
    const { children, iconAfter, iconAfterProps, iconBefore, iconBeforeProps, overrides, ...restProps } = props;
    const { rover, overrides: menuOverrides } = React.useContext(MenuContext);

    const boxProps = Box.useProps(restProps);
    const roverProps = Rover.useProps({ ...rover, ...boxProps });

    const className = useClassName({
      style: styles.MenuItem,
      styleProps: { ...props, overrides: { ...menuOverrides, ...overrides } },
      themeKey,
      prevClassName: boxProps.className,
    });
    const iconBeforeClassName = useClassName({
      style: styles.MenuItemIcon,
      styleProps: { ...props, overrides: { ...menuOverrides, ...overrides }, isBefore: true },
      themeKey,
      themeKeySuffix: 'Icon',
    });
    const iconAfterClassName = useClassName({
      style: styles.MenuItemIcon,
      styleProps: { ...props, overrides: { ...menuOverrides, ...overrides }, isAfter: true },
      themeKey,
      themeKeySuffix: 'Icon',
    });

    return {
      ...roverProps,
      className,
      role: 'menuitem',
      children: (
        <React.Fragment>
          {iconBefore && <Icon className={iconBeforeClassName} icon={iconBefore} {...iconBeforeProps} />}
          {children}
          {iconAfter && <Icon className={iconAfterClassName} icon={iconAfter} {...iconAfterProps} />}
        </React.Fragment>
      ),
    };
  },
  { themeKey: 'Menu.Item' }
);

export const MenuItem = createComponent<MenuItemProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Menu.Item',
    },
    themeKey: 'Menu.Item',
  }
);
