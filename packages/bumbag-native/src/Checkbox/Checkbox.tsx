import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Checkbox.styles';

export type LocalCheckboxProps = {};
export type CheckboxProps = BoxProps & RNViewProps & LocalCheckboxProps;

const useProps = createHook<CheckboxProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'native.Checkbox' }
);

export const Checkbox = createComponent<CheckboxProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledCheckbox,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Checkbox',
    },
    themeKey: 'native.Checkbox',
  }
);
