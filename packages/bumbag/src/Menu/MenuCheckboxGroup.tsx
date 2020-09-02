import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';

import { MenuGroup, MenuGroupProps } from './MenuGroup';
import * as styles from './styles';

export type LocalMenuCheckboxGroupProps = {};
export type MenuCheckboxGroupProps = MenuGroupProps & LocalMenuCheckboxGroupProps;

const useProps = createHook<MenuCheckboxGroupProps>(
  (props, { themeKey }) => {
    const { ...restProps } = props;

    const menuGroupProps = MenuGroup.useProps(restProps);

    const className = useClassName({
      style: styles.MenuCheckboxGroup,
      styleProps: props,
      themeKey,
      prevClassName: menuGroupProps.className,
    });

    return {
      ...menuGroupProps,
      className,
    };
  },
  { themeKey: 'Menu.CheckboxGroup' }
);

export const MenuCheckboxGroup = createComponent<MenuCheckboxGroupProps>(
  (props) => {
    const checkboxGroupProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: checkboxGroupProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Menu.CheckboxGroup',
    },
    themeKey: 'Menu.CheckboxGroup',
  }
);
