import * as React from 'react';
import { Box as ReakitBox, useMenuItem as useReakitMenuItem, MenuItemProps as ReakitMenuItemProps } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';

import * as styles from './styles';

export type LocalDropdownMenuItemProps = {
  /** Icon that appears on the right side of the menu item. */
  iconAfter?: IconProps['icon'];
  iconAfterProps?: Omit<IconProps, 'icon'>;
  /** Icon that appears on the left side of the menu item. */
  iconBefore?: IconProps['icon'];
  iconBeforeProps?: Omit<IconProps, 'icon'>;
};
export type DropdownMenuItemProps = BoxProps & ReakitMenuItemProps & LocalDropdownMenuItemProps;

const useProps = createHook<DropdownMenuItemProps>(
  (props, themeKey) => {
    const {
      iconAfter,
      iconAfterProps,
      iconBefore,
      iconBeforeProps,
      children,

      baseId,
      disabled,
      first,
      focusable,
      last,
      unregister,
      register,
      currentId,
      hide,
      move,
      next,
      orientation,
      placement,
      previous,
      stopId,
      stops,
      visible,
      unstable_clickOnEnter,
      unstable_clickOnSpace,
      unstable_idCountRef,
      unstable_moves,
      ...restProps
    } = props;
    const dropdownMenuItemProps = useReakitMenuItem(
      {
        baseId,
        disabled,
        first,
        focusable,
        last,
        unregister,
        register,
        currentId,
        hide,
        move,
        next,
        orientation,
        placement,
        previous,
        stopId,
        stops,
        visible,
        unstable_clickOnEnter,
        unstable_clickOnSpace,
        unstable_idCountRef,
        unstable_moves
      },
      restProps
    );
    const boxProps = Box.useProps({ ...restProps, ...dropdownMenuItemProps });

    const className = useClassName({
      style: styles.DropdownMenuItem,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });
    const iconBeforeClassName = useClassName({
      style: styles.DropdownMenuItemIcon,
      styleProps: { ...props, isBefore: true },
      themeKey,
      themeKeySuffix: 'Icon'
    });
    const iconAfterClassName = useClassName({
      style: styles.DropdownMenuItemIcon,
      styleProps: { ...props, isAfter: true },
      themeKey,
      themeKeySuffix: 'Icon'
    });

    return {
      ...boxProps,
      className,
      children: (
        <React.Fragment>
          {iconBefore && <Icon className={iconBeforeClassName} icon={iconBefore} {...iconBeforeProps} />}
          {children}
          {iconAfter && <Icon className={iconAfterClassName} icon={iconAfter} {...iconAfterProps} />}
        </React.Fragment>
      )
    };
  },
  { themeKey: 'DropdownMenu.Item' }
);

export const DropdownMenuItem = createComponent<DropdownMenuItemProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'DropdownMenu.Item'
  }
);
