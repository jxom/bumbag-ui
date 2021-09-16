import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';
import { MenuOptionListProps, MenuOptionItemProps } from 'bumbag-native/Menu';

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
  listProps?: Partial<MenuOptionListProps>;
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
      listProps,
    } = props;
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
      children: (
        <styles.PickerOptionList
          alignCheck={alignCheck}
          disableLeftPadding={disableLeftPadding}
          disabled={disabled}
          hasDividers={hasDividers}
          onChange={onChange}
          options={options}
          optionComponent={styles.PickerMenuOptionItem}
          overrides={overrides}
          type="radio"
          value={value}
          {...listProps}
        />
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
