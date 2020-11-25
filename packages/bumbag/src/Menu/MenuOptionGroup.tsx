import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useOptionsState } from '../utils';

import { MenuGroup, MenuGroupProps } from './MenuGroup';
import * as styles from './Menu.styles';

export type LocalMenuOptionGroupProps = {
  defaultValue?: Array<string> | string;
  onBlur?: (values: Array<string> | string) => void;
  onChange?: (values: Array<string> | string, value: string) => void;
  type: 'checkbox' | 'radio';
  value?: Array<string> | string;
};
export type MenuOptionGroupProps = Omit<MenuGroupProps, 'onBlur' | 'onChange'> & LocalMenuOptionGroupProps;

const useProps = createHook<MenuOptionGroupProps>(
  (props, { themeKey }) => {
    const { children, defaultValue, onBlur, onChange, type, value, ...restProps } = props;

    const { getOptionItemProps } = useOptionsState({
      defaultValue,
      onBlur,
      onChange,
      type,
      value,
    });

    const menuGroupProps = MenuGroup.useProps({
      ...restProps,
      children: React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          ...child.props,
          ...getOptionItemProps({ value: child.props?.value }),
        });
      }),
    });

    const className = useClassName({
      style: styles.MenuOptionGroup,
      styleProps: props,
      themeKey,
      prevClassName: menuGroupProps.className,
    });

    return {
      ...menuGroupProps,
      className,
    };
  },
  { themeKey: 'Menu.OptionGroup' }
);

export const MenuOptionGroup = createComponent<MenuOptionGroupProps>(
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
      displayName: 'Menu.OptionGroup',
    },
    themeKey: 'Menu.OptionGroup',
  }
);
