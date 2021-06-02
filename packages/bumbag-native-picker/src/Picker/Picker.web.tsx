import * as React from 'react';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';
import { ListFlat } from 'bumbag-native/List/ListFlat';
import { Text } from 'bumbag-native/Text';

import * as styles from './Picker.styles';

export type LocalPickerProps = {
  options: any;
};
export type PickerProps = BoxProps & LocalPickerProps;

const useProps = createHook<PickerProps>(
  (props) => {
    const { options } = props;

    const boxProps = Box.useProps(props);

    return {
      ...boxProps,
      minHeight: 'major-12',
      maxHeight: 'major-12',
      alignY: 'center',
      position: 'relative',
      children: (
        <React.Fragment>
          <ListFlat
            minHeight="200px"
            maxHeight="200px"
            data={options}
            // @ts-ignore
            keyExtractor={(option) => option.value}
            // @ts-ignore
            renderItem={({ item }) => <Text>{item.label}</Text>}
          />
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
      component: styles.StyledPickerWeb,
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
