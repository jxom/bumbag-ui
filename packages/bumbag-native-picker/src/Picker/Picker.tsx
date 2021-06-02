import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

import * as styles from './Picker.styles';

export type LocalPickerProps = {};
export type PickerProps = BoxProps & RNViewProps & LocalPickerProps;

const useProps = createHook<PickerProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
      children: (
        <RNPicker selectedValue="java" onValueChange={() => null}>
          <RNPicker.Item label="Java" value="java" />
          <RNPicker.Item label="JavaScript" value="js" />
        </RNPicker>
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
