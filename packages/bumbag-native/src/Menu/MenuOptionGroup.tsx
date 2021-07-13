import * as React from 'react';
import { createComponent, createElement, createHook, useOptionsState } from 'bumbag/utils';
import { Palette } from 'bumbag/types';

import { Box, BoxProps } from '../Box';
import * as styles from './Menu.styles';

export type LocalMenuOptionGroupProps = {
  alignCheck: 'left' | 'right';
  defaultValue?: Array<string> | string;
  disableLeftPadding?: boolean;
  hasDividers?: boolean;
  onChange?: (values: Array<string> | string, value: string) => void;
  palette?: Palette;
  type: 'checkbox' | 'radio';
  value?: Array<string> | string;
};
export type MenuOptionGroupProps = BoxProps & LocalMenuOptionGroupProps;

const useProps = createHook<MenuOptionGroupProps>(
  (props) => {
    const {
      alignCheck,
      children,
      defaultValue,
      disableLeftPadding,
      hasDividers,
      palette,
      onChange,
      type,
      value,
      ...restProps
    } = props;

    const { getOptionItemProps } = useOptionsState({
      defaultValue,
      onChange,
      type,
      value,
    });

    const menuGroupProps = Box.useProps({
      ...restProps,
      children: React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          ...child.props,
          ...getOptionItemProps({ value: child.props?.value }),
          alignCheck,
          hasDivider: hasDividers && i < (children as any).length - 1,
          disableLeftPadding,
          palette,
          overrides: props.overrides,
        });
      }),
    });

    return {
      ...menuGroupProps,
    };
  },
  { themeKey: 'native.Menu.OptionGroup' }
);

export const MenuOptionGroup = createComponent<MenuOptionGroupProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.MenuOptionGroup,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Menu.OptionGroup',
    },
    themeKey: 'native.Menu.OptionGroup',
  }
);
