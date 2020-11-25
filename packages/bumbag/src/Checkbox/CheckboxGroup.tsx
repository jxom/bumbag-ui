import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useOptionsState } from '../utils';
import { Box, BoxProps } from '../Box';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import { Set, SetProps } from '../Set';

import { Checkbox, CheckboxProps } from './Checkbox';
import * as styles from './Checkbox.styles';

export type LocalCheckboxGroupProps = {
  /** Default value(s) of the checkbox group */
  defaultValue?: Array<string>;
  /** Disables the checkbox group */
  disabled?: boolean;
  name: string;
  /** Checkbox group options */
  options: Array<CheckboxProps>;
  /** Are the checkbox inputs layed out horizontally or vertically? */
  orientation?: 'vertical' | 'horizontal';
  spacing?: SetProps['spacing'];
  /** State of the checkbox group. Can be any color in the palette. */
  state?: string;
  /** Controlled value of the checkbox group */
  value?: Array<string>;
  /** Function to invoke when checkbox group has changed */
  onChange?: (value: Array<string>, targetValue: string) => void;
  /** Function to invoke when checkbox group has blurred */
  onBlur?: (value: Array<string>) => void;
};
export type CheckboxGroupProps = Omit<BoxProps, 'onBlur' | 'onChange'> & LocalCheckboxGroupProps;

const useProps = createHook<CheckboxGroupProps>(
  (props, { themeKey }) => {
    const {
      defaultValue,
      disabled,
      onBlur,
      onChange,
      options,
      orientation,
      overrides,
      name,
      spacing,
      state,
      value,
      ...restProps
    } = props;

    ////////////////////////////////////////////

    const boxProps = Box.useProps(restProps);

    ////////////////////////////////////////////

    const className = useClassName({
      style: styles.CheckboxGroup,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    ////////////////////////////////////////////

    const { getOptionItemProps } = useOptionsState({
      defaultValue,
      onBlur,
      onChange,
      type: 'checkbox',
      value,
      isNativeInput: true,
    });

    ////////////////////////////////////////////

    return {
      role: 'group',
      ...boxProps,
      className,
      children: (
        <Set orientation={orientation} spacing={spacing}>
          {options.map((option, i) => (
            <Checkbox
              key={i}
              {...option}
              {...getOptionItemProps({ value: option.value })}
              name={name}
              overrides={overrides}
              state={state || option.state}
              disabled={disabled || option.disabled}
            />
          ))}
        </Set>
      ),
    };
  },
  { defaultProps: { orientation: 'vertical', spacing: 'minor-2' }, themeKey: 'CheckboxGroup' }
);

export const CheckboxGroup = createComponent<CheckboxGroupProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'CheckboxGroup',
    },
    themeKey: 'CheckboxGroup',
  }
);

////////////////////////////////////////////////////////////////

export type LocalCheckboxGroupFieldProps = {
  /** Additional props for the CheckboxGroup component */
  checkboxGroupProps?: CheckboxGroupProps;
};
export type CheckboxGroupFieldProps = BoxProps & FieldWrapperProps & CheckboxGroupProps & LocalCheckboxGroupFieldProps;

const useCheckboxGroupFieldProps = createHook<CheckboxGroupFieldProps>(
  (props, { themeKey }) => {
    const {
      defaultChecked,
      description,
      disabled,
      hint,
      isOptional,
      isRequired,
      label,
      name,
      options,
      orientation,
      onBlur,
      onChange,
      overrides,
      checkboxGroupProps,
      state,
      tooltip,
      tooltipTriggerComponent,
      value,
      validationText,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.CheckboxGroupField,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return {
      ...boxProps,
      className,
      children: (
        <FieldWrapper
          description={description}
          hint={hint}
          isOptional={isOptional}
          isRequired={isRequired}
          label={label}
          labelType="legend"
          overrides={overrides}
          state={state}
          tooltip={tooltip}
          tooltipTriggerComponent={tooltipTriggerComponent}
          validationText={validationText}
        >
          {({ elementProps }) => (
            <CheckboxGroup
              defaultChecked={defaultChecked}
              disabled={disabled}
              orientation={orientation}
              name={name}
              options={options}
              onBlur={onBlur}
              onChange={onChange}
              overrides={overrides}
              state={state}
              value={value}
              {...elementProps}
              {...checkboxGroupProps}
            />
          )}
        </FieldWrapper>
      ),
    };
  },
  { themeKey: 'CheckboxGroupField' }
);

export const CheckboxGroupField = createComponent<CheckboxGroupFieldProps>(
  (props) => {
    const checkboxGroupFieldProps = useCheckboxGroupFieldProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: checkboxGroupFieldProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'CheckboxGroupField',
    },
    defaultProps: {
      use: 'fieldset',
    },
    themeKey: 'CheckboxGroupField',
  }
);
