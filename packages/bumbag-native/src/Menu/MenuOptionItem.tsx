import { createComponent, createElement, createHook, useUniqueId } from 'bumbag/utils';
import { Palette } from 'bumbag/types';

import { MenuItemProps } from './MenuItem';
import * as styles from './Menu.styles';

export type LocalMenuOptionItemProps = {
  alignCheck?: 'left' | 'right';
  checked?: boolean;
  checkIcon?: MenuItemProps['iconBeforeProps'];
  defaultChecked?: boolean;
  onChange?: ({ checked: boolean, value: string }) => void;
  palette?: Palette;
  value?: string;
};
export type MenuOptionItemProps = MenuItemProps & LocalMenuOptionItemProps;

const useProps = createHook<MenuOptionItemProps>(
  // @ts-ignore
  (props) => {
    const { alignCheck, checked, checkIcon, onChange, palette, value, ...restProps } = props;

    return {
      ...restProps,
      contentTextProps: {
        color: checked ? palette : undefined,
        ...restProps.contentTextProps,
      },
      iconBefore: props.iconBefore ? props.iconBefore : alignCheck === 'left' ? (checked ? checkIcon : {}) : undefined,
      iconBeforeProps: props.iconBeforeProps
        ? props.iconBeforeProps
        : {
            color: checked ? palette : undefined,
          },
      iconAfter: props.iconAfter ? props.iconAfter : alignCheck === 'right' ? (checked ? checkIcon : {}) : undefined,
      iconAfterProps: props.iconAfterProps
        ? props.iconAfterProps
        : {
            color: checked ? palette : undefined,
          },
      onPress: () => onChange && onChange({ checked: !checked, value }),
    };
  },
  {
    defaultProps: {
      alignCheck: 'left',
      checkIcon: {
        viewBoxWidth: 16,
        viewBoxHeight: 16,
        paths: [
          'M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z',
        ],
      },
      palette: 'primary',
    },
    themeKey: 'native.Menu.OptionItem',
  }
);

export const MenuOptionItem = createComponent<MenuOptionItemProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.MenuOptionItem,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Menu.OptionItem',
    },
    themeKey: 'native.Menu.OptionItem',
  }
);
