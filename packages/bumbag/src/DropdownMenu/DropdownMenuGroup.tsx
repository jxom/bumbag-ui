import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';

import { DropdownMenuContext } from './DropdownMenu';
import * as styles from './DropdownMenu.styles';

export type LocalDropdownMenuGroupProps = { title?: string };
export type DropdownMenuGroupProps = BoxProps & LocalDropdownMenuGroupProps;

const useProps = createHook<DropdownMenuGroupProps>(
  (props, { themeKey }) => {
    const { children, overrides, title, ...restProps } = props;
    const boxProps = Box.useProps(restProps);

    const { overrides: dropdownMenuOverrides } = React.useContext(DropdownMenuContext);

    const className = useClassName({
      style: styles.DropdownMenuGroup,
      styleProps: { ...props, overrides: { ...dropdownMenuOverrides, ...overrides } },
      themeKey,
      prevClassName: boxProps.className,
    });
    const titleClassName = useClassName({
      style: styles.DropdownMenuGroupTitle,
      styleProps: { ...props, overrides: { ...dropdownMenuOverrides, ...overrides } },
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
  { themeKey: 'DropdownMenu.Group' }
);

export const DropdownMenuGroup = createComponent<DropdownMenuGroupProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'DropdownMenu.Group',
    },
    themeKey: 'DropdownMenu.Group',
  }
);
