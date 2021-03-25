import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { Stack, StackProps } from '../Stack';
import * as styles from './FieldWrapper.styles';

export type LocalFieldWrapperProps = {};
export type FieldWrapperProps = BoxProps & RNViewProps & LocalFieldWrapperProps;

const useProps = createHook<FieldWrapperProps>(
  (props) => {
    const { children, label } = props;

    const boxProps = Box.useProps(props);

    return {
      ...boxProps,
      children: (
        <Stack spacing="major-1">
          <styles.FieldWrapperLabel>{label}</styles.FieldWrapperLabel>
          {children}
        </Stack>
      ),
    };
  },
  { themeKey: 'native.FieldWrapper' }
);

export const FieldWrapper = createComponent<FieldWrapperProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledFieldWrapper,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.FieldWrapper',
    },
    themeKey: 'native.FieldWrapper',
  }
);
