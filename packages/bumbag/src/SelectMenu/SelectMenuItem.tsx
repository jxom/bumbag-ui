import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { DropdownMenuItem, DropdownMenuItemProps } from '../DropdownMenu';
import { MenuItem as _MenuItem } from '../Menu';

import * as styles from './SelectMenu.styles';

export type LocalSelectMenuItemProps = {
  isDropdown?: boolean;
};
export type SelectMenuItemProps = BoxProps & DropdownMenuItemProps & LocalSelectMenuItemProps;

const useProps = createHook<SelectMenuItemProps>(
  (props, { themeKey }) => {
    const { isDropdown, ...restProps } = props;

    const MenuItem = isDropdown ? DropdownMenuItem : _MenuItem;

    const dropdownMenuItemProps = MenuItem.useProps(restProps);

    const className = useClassName({
      style: styles.SelectMenuItem,
      styleProps: { ...dropdownMenuItemProps, ...props },
      themeKey,
      prevClassName: dropdownMenuItemProps.className,
    });

    return { ...dropdownMenuItemProps, className };
  },
  { defaultProps: { isDropdown: true, role: 'option' }, themeKey: 'SelectMenu.Item' }
);

export const SelectMenuItem = createComponent<SelectMenuItemProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'SelectMenu.Item',
    },
    defaultProps: {
      use: 'li',
    },
    themeKey: 'SelectMenu.Item',
  }
);
