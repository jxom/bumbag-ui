import * as React from 'react';
import {
  Box as ReakitBox,
  useMenuSeparator as useReakitMenuSeparator,
  MenuSeparatorProps as ReakitMenuSeparatorProps,
} from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Divider } from '../Divider';

import { MenuContext } from './Menu';
import * as styles from './Menu.styles';

export type LocalMenuDividerProps = {};
export type MenuDividerProps = BoxProps & ReakitMenuSeparatorProps & LocalMenuDividerProps;

const useProps = createHook<MenuDividerProps>(
  (props, { themeKey }) => {
    const { orientation, overrides, ...restProps } = props;

    const { overrides: menuOverrides } = React.useContext(MenuContext);

    const MenuDividerProps = useReakitMenuSeparator(
      {
        orientation,
      },
      restProps
    );
    const dividerProps = Divider.useProps({ ...restProps, ...MenuDividerProps });

    const className = useClassName({
      style: styles.MenuDivider,
      styleProps: { ...props, overrides: { ...menuOverrides, overrides } },
      themeKey,
      prevClassName: dividerProps.className,
    });

    return { ...dividerProps, role: 'separator', className };
  },
  { themeKey: 'Menu.Divider' }
);

export const MenuDivider = createComponent<MenuDividerProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Menu.Divider',
    },
    themeKey: 'Menu.Divider',
  }
);
