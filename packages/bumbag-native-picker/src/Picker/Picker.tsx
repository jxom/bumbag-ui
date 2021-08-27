import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';
import { MenuProps, MenuOptionGroupProps, MenuOptionItemProps } from 'bumbag-native/Menu';

import * as styles from './Picker.styles';

export type LocalPickerProps = {
  alignCheck?: 'left' | 'right';
  defaultValue?: string;
  disabled?: boolean;
  disableLeftPadding?: boolean;
  hasDividers?: boolean;
  onChange?: (value: string) => void;
  options: Array<{ key?: string; label: string; value: any; disabled?: boolean } & Partial<MenuOptionItemProps>>;
  value?: string;
  menuProps?: Partial<MenuProps>;
  menuOptionGroupProps?: Partial<MenuOptionGroupProps>;
};
export type PickerProps = BoxProps & RNViewProps & LocalPickerProps;

const useProps = createHook<PickerProps>(
  (props) => {
    const {
      alignCheck,
      disabled,
      disableLeftPadding,
      hasDividers,
      onChange,
      options,
      overrides,
      value,
      menuProps,
      menuOptionGroupProps,
    } = props;
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
      children: (
        <styles.PickerMenu
          disableLeftPadding={disableLeftPadding}
          hasDividers={hasDividers}
          overrides={overrides}
          {...menuProps}
        >
          <styles.PickerMenuOptionGroup
            alignCheck={alignCheck}
            onChange={onChange}
            value={value}
            overrides={overrides}
            type="radio"
            {...menuOptionGroupProps}
          >
            {options.map((option, index) => (
              <styles.PickerMenuOptionItem
                key={option.key || index}
                disabled={option.disabled || disabled}
                overrides={overrides}
                {...option}
              >
                {option.label}
              </styles.PickerMenuOptionItem>
            ))}
          </styles.PickerMenuOptionGroup>
        </styles.PickerMenu>
      ),
    };
  },
  { themeKey: 'native.Picker' }
);

export const Picker = createComponent<PickerProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.Picker,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Picker',
    },
    themeKey: 'native.Picker',
  }
);
