import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook, useOptionsState } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { SetProps } from '../Set';
import { CheckboxProps } from './Checkbox';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import * as styles from './Checkbox.styles';

export type LocalCheckboxGroupProps = {
  /** Alignment of the checkbox group */
  align?: 'left' | 'right';
  /** Default value(s) of the checkbox group */
  defaultValue?: Array<string>;
  /** Disables the checkbox group */
  disabled?: boolean;
  /** Checkbox group options */
  options: Array<CheckboxProps & { value: string }>;
  /** Are the checkbox inputs layed out horizontally or vertically? */
  orientation?: 'vertical' | 'horizontal';
  /** Color of the checkbox group. Can be any color in the palette. */
  palette?: string;
  spacing?: SetProps['spacing'];
  /** State of the checkbox group. Can be any color in the palette. */
  state?: string;
  /** Controlled value of the checkbox group */
  value?: Array<string>;
  /** Function to invoke when checkbox group has changed */
  onChange?: (value: Array<string>, targetValue: string) => void;
  /** Overrides for the CheckboxGroup `Set` component. */
  setProps?: Partial<SetProps>;
};
export type CheckboxGroupProps = BoxProps & RNViewProps & LocalCheckboxGroupProps;

const useProps = createHook<CheckboxGroupProps>(
  (props) => {
    const {
      align,
      colorMode,
      defaultValue,
      disabled,
      onChange,
      options,
      orientation,
      overrides,
      palette,
      spacing,
      state,
      value,
      variant,
      setProps,
      ...restProps
    } = props;

    ////////////////////////////////////////////

    const boxProps = Box.useProps(props);

    ////////////////////////////////////////////

    const { getOptionItemProps } = useOptionsState({
      defaultValue,
      onChange,
      type: 'checkbox',
      value,
    });

    ////////////////////////////////////////////

    return {
      ...boxProps,
      children: (
        <styles.CheckboxGroupSet
          colorMode={colorMode}
          orientation={orientation}
          overrides={overrides}
          spacing={spacing}
          {...setProps}
        >
          {options.map((option, i) => (
            <styles.CheckboxGroupItem
              key={i} // eslint-disable-line
              {...option}
              {...getOptionItemProps({ value: option.value })}
              colorMode={colorMode}
              overrides={overrides}
              // @ts-ignore
              align={align}
              state={state || option.state}
              palette={palette || option.palette}
              disabled={disabled || option.disabled}
              variant={variant}
              width={orientation === 'vertical' ? '100%' : undefined}
            />
          ))}
        </styles.CheckboxGroupSet>
      ),
    };
  },
  { defaultProps: { orientation: 'vertical', spacing: 'minor-2' }, themeKey: 'native.CheckboxGroup' }
);

export const CheckboxGroup = createComponent<CheckboxGroupProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.CheckboxGroup,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.CheckboxGroup',
    },
    themeKey: 'native.CheckboxGroup',
  }
);

////////////////////////////////////////////////////////////////

export type LocalCheckboxGroupFieldProps = {
  /** Additional props for the Checkbox component */
  checkboxGroupProps?: Partial<CheckboxGroupProps>;
};
export type CheckboxGroupFieldProps = BoxProps & FieldWrapperProps & CheckboxGroupProps & LocalCheckboxGroupFieldProps;

const useCheckboxGroupFieldProps = createHook<CheckboxGroupFieldProps>(
  (props) => {
    const {
      align,
      colorMode,
      defaultValue,
      description,
      disabled,
      hint,
      isOptional,
      isRequired,
      label,
      options,
      onChange,
      orientation,
      overrides,
      palette,
      spacing,
      setProps,
      state,
      value,
      variant,
      validationText,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    return {
      ...boxProps,
      children: (
        <FieldWrapper
          description={description}
          hint={hint}
          isOptional={isOptional}
          isRequired={isRequired}
          label={label}
          overrides={overrides}
          state={state}
          variant={variant}
          validationText={validationText}
        >
          <CheckboxGroup
            align={align}
            colorMode={colorMode}
            defaultValue={defaultValue}
            disabled={disabled}
            onChange={onChange}
            options={options}
            orientation={orientation}
            palette={palette}
            spacing={spacing}
            setProps={setProps}
            state={state}
            value={value}
            variant={variant}
            overrides={overrides}
          />
        </FieldWrapper>
      ),
    };
  },
  {
    defaultProps: {
      align: 'left',
      palette: 'primary',
      variant: 'default',
    },
    themeKey: 'CheckboxGroupField',
  }
);

export const CheckboxGroupField = createComponent<CheckboxGroupFieldProps>(
  (props) => {
    const CheckboxGroupFieldProps = useCheckboxGroupFieldProps(props);
    return createElement({
      children: props.children,
      component: styles.CheckboxGroupField,
      htmlProps: CheckboxGroupFieldProps,
    });
  },
  {
    attach: {
      useProps: useCheckboxGroupFieldProps,
      displayName: 'CheckboxGroupField',
    },
    themeKey: 'CheckboxGroupField',
  }
);
