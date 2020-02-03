import {
  Box as ReakitBox,
  useMenuSeparator as useReakitMenuSeparator,
  MenuSeparatorProps as ReakitMenuSeparatorProps
} from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';
import { Divider } from '../Divider';

export type LocalDropdownMenuDividerProps = {};
export type DropdownMenuDividerProps = BoxProps & ReakitMenuSeparatorProps & LocalDropdownMenuDividerProps;

const useProps = createHook<DropdownMenuDividerProps>(
  (props, themeKey) => {
    const { orientation, ...restProps } = props;
    const dropdownMenuDividerProps = useReakitMenuSeparator(
      {
        orientation
      },
      restProps
    );
    const dividerProps = Divider.useProps({ ...restProps, ...dropdownMenuDividerProps });

    const className = useClassName({
      style: styles.DropdownMenuDivider,
      styleProps: props,
      themeKey,
      prevClassName: dividerProps.className
    });

    return { ...dividerProps, className };
  },
  { themeKey: 'DropdownMenu.Divider' }
);

export const DropdownMenuDivider = createComponent<DropdownMenuDividerProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'DropdownMenu.Divider'
  }
);
