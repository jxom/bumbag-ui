import * as React from 'react';
import { PickerProps as RNPickerProps } from '@react-native-picker/picker';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { Box, BoxProps, BoxTouchableProps } from 'bumbag-native/Box';
import { Palette } from 'bumbag/types';

import * as styles from './Picker.styles';

export type LocalPickerProps = {
  alignCheckIcon?: 'left' | 'right';
  defaultValue?: string;
  disabled?: boolean;
  hasDividers?: boolean;
  height?: string;
  options: Array<{ label: string; value: any; disabled?: boolean }>;
  onChange?: (value: string) => void;
  palette?: Palette;
  value?: string;
  pickerProps?: Partial<RNPickerProps>;
};
export type PickerProps = BoxProps & LocalPickerProps;

const useProps = createHook<PickerProps>(
  (props) => {
    const { alignCheckIcon, defaultValue, disabled, hasDividers, onChange, options, palette, value: _value } = props;

    /////////////////////////////////////////////

    const boxProps = Box.useProps(props);

    /////////////////////////////////////////////

    const [controlledValue, setControlledValue] = React.useState(defaultValue || []);
    const value = typeof _value !== 'undefined' ? _value : controlledValue;

    /////////////////////////////////////////////

    const handleChange = React.useCallback(
      (value) => {
        if (onChange && typeof _value !== 'undefined') {
          onChange(value);
        } else {
          setControlledValue(value);
        }
      },
      [_value, onChange]
    );

    /////////////////////////////////////////////

    return {
      ...boxProps,
      children: (
        <React.Fragment>
          {options.map((option, index) => (
            <PickerItem
              key={index}
              alignCheckIcon={alignCheckIcon}
              checked={value === option.value}
              disabled={disabled || option.disabled}
              hasDivider={hasDividers && index < options.length - 1}
              onPress={() => (!disabled ? handleChange(option.value) : null)}
              palette={palette}
              label={option.label}
              overrides={props.overrides}
            />
          ))}
        </React.Fragment>
      ),
    };
  },
  { themeKey: 'native.Picker' }
);

export const Picker = createComponent<PickerProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      component: styles.StyledPicker,
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

//////////////////////////////////////////////////////////

export type LocalPickerItemProps = {
  alignCheckIcon?: 'left' | 'right';
  checked?: boolean;
  disabled?: boolean;
  label: string;
  hasDivider?: boolean;
  palette?: Palette;
};
export type PickerItemProps = BoxTouchableProps & LocalPickerItemProps;

const usePickerItemProps = createHook<PickerItemProps>(
  (props) => {
    const { alignCheckIcon, checked, hasDivider, label } = props;
    const boxProps = Box.useProps(props);

    return {
      ...boxProps,
      children: (
        <>
          {alignCheckIcon === 'left' && (
            /* @ts-ignore */
            <styles.StyledPickerItemIconWrapper alignCheckIcon="left" overrides={props.overrides}>
              {checked && (
                <styles.StyledPickerItemIcon
                  color={checked ? props.palette || 'primary' : undefined}
                  icon={{
                    viewBoxWidth: 16,
                    viewBoxHeight: 16,
                    paths: [
                      'M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z',
                    ],
                  }}
                  overrides={props.overrides}
                />
              )}
            </styles.StyledPickerItemIconWrapper>
          )}
          <styles.StyledPickerItemLabelWrapper
            /* @ts-ignore */
            alignCheckIcon={alignCheckIcon}
            hasDivider={hasDivider}
            overrides={props.overrides}
          >
            {/* @ts-ignore */}
            <styles.StyledPickerItemLabel checked={checked} overrides={props.overrides}>
              {label}
            </styles.StyledPickerItemLabel>
            {alignCheckIcon === 'right' && (
              /* @ts-ignore */
              <styles.StyledPickerItemIconWrapper alignCheckIcon="right" overrides={props.overrides}>
                {checked && (
                  <styles.StyledPickerItemIcon
                    color={checked ? props.palette || 'primary' : undefined}
                    icon={{
                      viewBoxWidth: 16,
                      viewBoxHeight: 16,
                      paths: [
                        'M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z',
                      ],
                    }}
                    overrides={props.overrides}
                  />
                )}
              </styles.StyledPickerItemIconWrapper>
            )}
          </styles.StyledPickerItemLabelWrapper>
        </>
      ),
    };
  },
  {
    defaultProps: { _hover: true, _active: true, _hoveractive: true, _focus: true, alignCheckIcon: 'left' },
    themeKey: 'native.PickerItem',
  }
);

export const PickerItem = createComponent<PickerItemProps>(
  (props) => {
    const htmlProps = usePickerItemProps(props);
    return createElement({
      component: styles.StyledPickerItem,
      htmlProps,
    });
  },
  {
    attach: {
      useProps: usePickerItemProps,
      displayName: 'native.PickerItem',
    },
    themeKey: 'native.PickerItem',
  }
);
