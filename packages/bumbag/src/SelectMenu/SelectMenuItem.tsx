import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { DropdownMenuItem, DropdownMenuItemProps } from '../DropdownMenu';

import * as styles from './styles';

export type LocalSelectMenuItemProps = {};
export type SelectMenuItemProps = BoxProps & DropdownMenuItemProps & LocalSelectMenuItemProps;

const useProps = createHook<SelectMenuItemProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const dropdownMenuItemProps = DropdownMenuItem.useProps(props);

    const className = useClassName({
      style: styles.SelectMenuItem,
      styleProps: { ...dropdownMenuItemProps, ...props },
      themeKey,
      themeKeyOverride,
      prevClassName: dropdownMenuItemProps.className,
    });

    return { ...dropdownMenuItemProps, className };
  },
  { defaultProps: { role: 'option' }, themeKey: 'SelectMenu.Item' }
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
