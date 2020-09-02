import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';

import { MenuItem, MenuItemProps } from './MenuItem';
import * as styles from './styles';

export type LocalMenuCheckboxItemProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: any;
};
export type MenuCheckboxItemProps = MenuItemProps & LocalMenuCheckboxItemProps;

const useProps = createHook<MenuCheckboxItemProps>(
  (props, { themeKey }) => {
    const { children, checked, onChange, ...restProps } = props;

    //////////////////////////////////////////////////////

    const menuItemProps = MenuItem.useProps(restProps);

    //////////////////////////////////////////////////////

    const className = useClassName({
      style: styles.MenuCheckboxItem,
      styleProps: props,
      themeKey,
      prevClassName: menuItemProps.className,
    });
    const iconWrapperClassName = useClassName({
      style: styles.MenuCheckboxItemIconWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'IconWrapper',
    });

    //////////////////////////////////////////////////////

    return {
      ...menuItemProps,
      'aria-checked': checked,
      className,
      onClick: () => onChange && onChange(!checked),
      children: (
        <>
          <Box className={iconWrapperClassName}>
            {checked && (
              <Icon
                icon={{
                  viewBoxWidth: 16,
                  viewBoxHeight: 16,
                  paths: [
                    'M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z',
                  ],
                }}
              />
            )}
          </Box>
          {children}
        </>
      ),
    };
  },
  { themeKey: 'Menu.CheckboxItem' }
);

export const MenuCheckboxItem = createComponent<MenuCheckboxItemProps>(
  (props) => {
    const checkboxItemProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: checkboxItemProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Menu.CheckboxItem',
    },
    themeKey: 'Menu.CheckboxItem',
  }
);
