import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { DropdownMenuContext } from './DropdownMenu';
import * as styles from './styles';

export type LocalDropdownMenuGroupProps = { title?: string };
export type DropdownMenuGroupProps = BoxProps & LocalDropdownMenuGroupProps;

const useProps = createHook<DropdownMenuGroupProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { children, overrides, title, ...restProps } = props;
    const boxProps = Box.useProps(restProps);

    const { overrides: dropdownMenuOverrides } = React.useContext(DropdownMenuContext);

    const className = useClassName({
      style: styles.DropdownMenuGroup,
      styleProps: { ...props, overrides: { ...dropdownMenuOverrides, ...overrides } },
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });
    const titleClassName = useClassName({
      style: styles.DropdownMenuGroupTitle,
      styleProps: { ...props, overrides: { ...dropdownMenuOverrides, ...overrides } },
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Title',
      prevClassName: boxProps.className
    });

    return {
      ...boxProps,
      role: 'group',
      className,
      children: (
        <React.Fragment>
          {title && <Box className={titleClassName}>{title}</Box>}
          {children}
        </React.Fragment>
      )
    };
  },
  { themeKey: 'DropdownMenu.Group' }
);

export const DropdownMenuGroup = createComponent<DropdownMenuGroupProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'DropdownMenu.Group'
  }
);
