import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';

import { MenuItem, MenuItemProps } from './MenuItem';
import * as styles from './Menu.styles';

export type LocalMenuOptionItemProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ({ checked: boolean, value: string }) => void;
  value?: string;
};
export type MenuOptionItemProps = MenuItemProps & LocalMenuOptionItemProps;

const useProps = createHook<MenuOptionItemProps>(
  (props, { themeKey }) => {
    const { children, checked, onChange, value, ...restProps } = props;

    //////////////////////////////////////////////////////

    const menuItemProps = MenuItem.useProps(restProps);

    //////////////////////////////////////////////////////

    const className = useClassName({
      style: styles.MenuOptionItem,
      styleProps: props,
      themeKey,
      prevClassName: menuItemProps.className,
    });
    const iconWrapperClassName = useClassName({
      style: styles.MenuOptionItemIconWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'IconWrapper',
    });

    //////////////////////////////////////////////////////

    return {
      ...menuItemProps,
      'aria-checked': checked,
      className,
      onClick: () => onChange && onChange({ checked: !checked, value }),
      children: (
        <>
          <Box className={iconWrapperClassName} overrides={props.overrides}>
            {checked && (
              <Icon
                icon={{
                  viewBoxWidth: 16,
                  viewBoxHeight: 16,
                  paths: [
                    'M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z',
                  ],
                }}
                overrides={props.overrides}
              />
            )}
          </Box>
          {children}
        </>
      ),
    };
  },
  { themeKey: 'Menu.OptionItem' }
);

export const MenuOptionItem = createComponent<MenuOptionItemProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Menu.OptionItem',
    },
    themeKey: 'Menu.OptionItem',
  }
);
