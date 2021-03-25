import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook, useUniqueId } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { Text, TextProps } from '../Text';
import * as styles from './FieldWrapper.styles';

export type LocalFieldWrapperProps = {
  /** Sets the label on the field wrapper. */
  label?: string | React.ReactElement<any>;
};
export type FieldWrapperProps = BoxProps & RNViewProps & LocalFieldWrapperProps;

const useProps = createHook<FieldWrapperProps>(
  (props) => {
    const {
      children,
      description,
      hint,
      isOptional,
      label,
      labelType,
      isRequired,
      state,
      validationText,
      ...restProps
    } = props;
    const boxProps = Box.useProps(restProps);

    const uid = useUniqueId();

    const elementProps = { labelId: uid, state };

    return {
      ...boxProps,
      children: (
        <React.Fragment>
          {label && (
            <styles.StyledFieldWrapperLabelWrapper>
              {typeof label === 'string' ? (
                <styles.StyledFieldWrapperLabel nativeID={uid}>{label}</styles.StyledFieldWrapperLabel>
              ) : (
                label
              )}
            </styles.StyledFieldWrapperLabelWrapper>
          )}
          {typeof children === 'function'
            ? /*
                // @ts-ignore */
              children({ elementProps })
            : /*
                // @ts-ignore */
              React.cloneElement(children as React.ReactElement<any>, elementProps)}
        </React.Fragment>
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
