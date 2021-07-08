import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { useSpace } from 'bumbag-native/utils';
import { Box, BoxProps } from 'bumbag-native/Box';
import { Picker as RNPicker, PickerProps as RNPickerProps } from '@react-native-picker/picker';

import * as styles from './Picker.styles';

export type LocalPickerIOSProps = {
  defaultValue?: string;
  disabled?: boolean;
  height?: string;
  onChange?: (value: string) => void;
  options: Array<{ label: string; value: any; disabled?: boolean }>;
  pickerProps?: Partial<RNPickerProps>;
  value?: string;
};
export type PickerIOSProps = BoxProps & RNViewProps & RNPickerProps & LocalPickerIOSProps;

const useProps = createHook<PickerIOSProps>(
  (props) => {
    const { defaultValue, disabled, onChange, options, pickerProps, value: _value } = props;

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

    const pickerHeight = useSpace(props.height);

    /////////////////////////////////////////////

    return {
      ...boxProps,
      onChange: null,
      children: (
        <RNPicker
          enabled={!disabled}
          selectedValue={value}
          onValueChange={handleChange}
          style={{ padding: 0 }}
          itemStyle={[{ height: pickerHeight, padding: 0 }, props.itemStyle]}
          {...pickerProps}
        >
          {options.map((option) => (
            <RNPicker.Item key={option.value} label={option.label} value={option.value} />
          ))}
        </RNPicker>
      ),
    };
  },
  { defaultProps: { height: 'major-20' }, themeKey: 'native.Picker' }
);

export const PickerIOS = createComponent<PickerIOSProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledPickerIOS,
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
