import * as React from 'react';
import { Box as ReakitBox, useMenuItem as useReakitMenuItem, MenuItemProps as ReakitMenuItemProps } from 'reakit';

import { bindFns, useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';

import { DropdownMenuContext } from './DropdownMenu';
import * as styles from './DropdownMenu.styles';

export type LocalDropdownMenuItemProps = {
  hideOnClick?: boolean;
  /** Icon that appears on the right side of the menu item. */
  iconAfter?: IconProps['icon'];
  iconAfterProps?: Omit<IconProps, 'icon'>;
  /** Icon that appears on the left side of the menu item. */
  iconBefore?: IconProps['icon'];
  iconBeforeProps?: Omit<IconProps, 'icon'>;
  isTabbable?: boolean;
};
export type DropdownMenuItemProps = BoxProps & Partial<ReakitMenuItemProps> & LocalDropdownMenuItemProps;

const useProps = createHook<DropdownMenuItemProps>(
  (props, { themeKey }) => {
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
      unregisterItem,
      registerItem,
      currentId,
      hide,
      hideOnClick,
      move,
      next,
      onClick,
      orientation,
      overrides,
      placement,
      previous,
      id,
      setCurrentId,
      items,
      visible,
      up,
      down,
      unstable_arrowStyles,
      unstable_clickOnEnter,
      unstable_clickOnSpace,
      unstable_hasActiveWidget,
      unstable_idCountRef,
      unstable_moves,
      unstable_popoverStyles,
      unstable_virtual,
      ...restProps
    } = props;

    const { overrides: dropdownMenuOverrides, dropdownMenu } = React.useContext(DropdownMenuContext);
    const dropdownMenuItemProps = useReakitMenuItem(
      {
        baseId,
        disabled,
        first,
        focusable,
        last,
        unregisterItem,
        registerItem,
        currentId,
        hide,
        move,
        next,
        orientation,
        placement,
        previous,
        id,
        setCurrentId,
        items,
        visible,
        up,
        down,
        unstable_arrowStyles,
        unstable_clickOnEnter,
        unstable_clickOnSpace,
        unstable_hasActiveWidget,
        unstable_idCountRef,
        unstable_moves,
        unstable_popoverStyles,
        unstable_virtual,
        ...dropdownMenu,
      },
      restProps
    );
    const boxProps = Box.useProps({ ...restProps, ...dropdownMenuItemProps });

    const className = useClassName({
      style: styles.DropdownMenuItem,
      styleProps: { ...props, overrides: { ...dropdownMenuOverrides, ...overrides } },
      themeKey,
      prevClassName: boxProps.className,
    });
    const iconBeforeClassName = useClassName({
      style: styles.DropdownMenuItemIcon,
      styleProps: { ...props, overrides: { ...dropdownMenuOverrides, ...overrides }, isBefore: true },
      themeKey,
      themeKeySuffix: 'Icon',
    });
    const iconAfterClassName = useClassName({
      style: styles.DropdownMenuItemIcon,
      styleProps: { ...props, overrides: { ...dropdownMenuOverrides, ...overrides }, isAfter: true },
      themeKey,
      themeKeySuffix: 'Icon',
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
      ),
      onClick: hideOnClick ? bindFns(onClick, hide, dropdownMenu.hide) : onClick,
      tabIndex: props.isTabbable ? boxProps.tabIndex : undefined,
    };
  },
  { defaultProps: { hideOnClick: true, isTabbable: true }, themeKey: 'DropdownMenu.Item' }
);

export const DropdownMenuItem = createComponent<DropdownMenuItemProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'DropdownMenu.Item',
    },
    themeKey: 'DropdownMenu.Item',
  }
);
