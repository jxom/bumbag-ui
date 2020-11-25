import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';

import { MenuContext } from './Menu';
import * as styles from './Menu.styles';

export type LocalMenuGroupProps = { title?: string };
export type MenuGroupProps = BoxProps & LocalMenuGroupProps;

const useProps = createHook<MenuGroupProps>(
  (props, { themeKey }) => {
    const { children, overrides, title, ...restProps } = props;
    const boxProps = Box.useProps(restProps);

    const { overrides: menuOverrides } = React.useContext(MenuContext);

    const className = useClassName({
      style: styles.MenuGroup,
      styleProps: { ...props, overrides: { ...menuOverrides, ...overrides } },
      themeKey,
      prevClassName: boxProps.className,
    });
    const titleClassName = useClassName({
      style: styles.MenuGroupTitle,
      styleProps: { ...props, overrides: { ...menuOverrides, ...overrides } },
      themeKey,
      themeKeySuffix: 'Title',
      prevClassName: boxProps.className,
    });

    const titleId = useUniqueId();

    return {
      ...boxProps,
      'aria-labelledby': titleId,
      role: 'group',
      className,
      children: (
        <React.Fragment>
          {title && (
            <Box className={titleClassName} id={titleId}>
              {title}
            </Box>
          )}
          {children}
        </React.Fragment>
      ),
    };
  },
  { themeKey: 'Menu.Group' }
);

export const MenuGroup = createComponent<MenuGroupProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Menu.Group',
    },
    themeKey: 'Menu.Group',
  }
);
