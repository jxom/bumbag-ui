import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook, useOptionsState } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { SetProps } from '../Set';
import { RadioProps } from './Radio';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import * as styles from './Radio.styles';

export type LocalRadioGroupProps = {
  /** Alignment of the radio group */
  align?: 'left' | 'right';
  /** Default value(s) of the radio group */
  defaultValue?: Array<string>;
  /** Disables the radio group */
  disabled?: boolean;
  /** Radio group options */
  options: Array<RadioProps & { value: string }>;
  /** Are the radio inputs layed out horizontally or vertically? */
  orientation?: 'vertical' | 'horizontal';
  /** Color of the radio group. Can be any color in the palette. */
  palette?: string;
  spacing?: SetProps['spacing'];
  /** State of the radio group. Can be any color in the palette. */
  state?: string;
  /** Controlled value of the radio group */
  value?: string;
  /** Function to invoke when radio group has changed */
  onChange?: (value: string) => void;
  /** Overrides for the RadioGroup `Set` component. */
  setProps?: Partial<SetProps>;
};
export type RadioGroupProps = BoxProps & RNViewProps & LocalRadioGroupProps;

const useProps = createHook<RadioGroupProps>(
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
      type: 'radio',
      value,
    });

    ////////////////////////////////////////////

    return {
      ...boxProps,
      children: (
        <styles.RadioGroupSet
          colorMode={colorMode}
          orientation={orientation}
          overrides={overrides}
          spacing={spacing}
          {...setProps}
        >
          {options.map((option, i) => (
            <styles.RadioGroupItem
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
        </styles.RadioGroupSet>
      ),
    };
  },
  { defaultProps: { orientation: 'vertical', spacing: 'minor-2' }, themeKey: 'native.RadioGroup' }
);

export const RadioGroup = createComponent<RadioGroupProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.RadioGroup,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.RadioGroup',
    },
    themeKey: 'native.RadioGroup',
  }
);

////////////////////////////////////////////////////////////////

export type LocalRadioGroupFieldProps = {
  /** Additional props for the Radio component */
  radioGroupProps?: Partial<RadioGroupProps>;
};
export type RadioGroupFieldProps = BoxProps & FieldWrapperProps & RadioGroupProps & LocalRadioGroupFieldProps;

const useRadioGroupFieldProps = createHook<RadioGroupFieldProps>(
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
      radioGroupProps,
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
          <RadioGroup
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
            {...radioGroupProps}
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
    themeKey: 'RadioGroupField',
  }
);

export const RadioGroupField = createComponent<RadioGroupFieldProps>(
  (props) => {
    const RadioGroupFieldProps = useRadioGroupFieldProps(props);
    return createElement({
      children: props.children,
      component: styles.RadioGroupField,
      htmlProps: RadioGroupFieldProps,
    });
  },
  {
    attach: {
      useProps: useRadioGroupFieldProps,
      displayName: 'RadioGroupField',
    },
    themeKey: 'RadioGroupField',
  }
);
