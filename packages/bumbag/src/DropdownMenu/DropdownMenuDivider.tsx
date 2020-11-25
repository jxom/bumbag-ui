import * as React from 'react';
import {
  Box as ReakitBox,
  useMenuSeparator as useReakitMenuSeparator,
  MenuSeparatorProps as ReakitMenuSeparatorProps,
} from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Divider } from '../Divider';

import { DropdownMenuContext } from './DropdownMenu';
import * as styles from './DropdownMenu.styles';

export type LocalDropdownMenuDividerProps = {};
export type DropdownMenuDividerProps = BoxProps & ReakitMenuSeparatorProps & LocalDropdownMenuDividerProps;

const useProps = createHook<DropdownMenuDividerProps>(
  (props, { themeKey }) => {
    const { orientation, overrides, ...restProps } = props;

    const { overrides: dropdownMenuOverrides } = React.useContext(DropdownMenuContext);

    const dropdownMenuDividerProps = useReakitMenuSeparator(
      {
        orientation,
      },
      restProps
    );
    const dividerProps = Divider.useProps({ ...restProps, ...dropdownMenuDividerProps });

    const className = useClassName({
      style: styles.DropdownMenuDivider,
      styleProps: { ...props, overrides: { ...dropdownMenuOverrides, overrides } },
      themeKey,
      prevClassName: dividerProps.className,
    });

    return { ...dividerProps, className };
  },
  { themeKey: 'DropdownMenu.Divider' }
);

export const DropdownMenuDivider = createComponent<DropdownMenuDividerProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'DropdownMenu.Divider',
    },
    themeKey: 'DropdownMenu.Divider',
  }
);
