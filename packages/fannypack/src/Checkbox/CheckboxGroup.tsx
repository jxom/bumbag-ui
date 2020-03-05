import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import { Set, SetProps } from '../Set';

import { Checkbox, CheckboxProps } from './Checkbox';
import * as styles from './styles';

export type LocalCheckboxGroupProps = {
  /** Default value(s) of the checkbox group */
  defaultValue?: Array<string> | string;
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
  value?: Array<string> | string;
  /** Function to invoke when checkbox group has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
};
export type CheckboxGroupProps = BoxProps & LocalCheckboxGroupProps;

const useProps = createHook<CheckboxGroupProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      defaultValue: initialDefaultValue,
      disabled,
      onChange,
      options,
      orientation,
      overrides,
      name,
      spacing,
      state,
      value: initialValue,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.CheckboxGroup,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    let defaultValue = initialDefaultValue;
    if (typeof initialDefaultValue === 'string') {
      defaultValue = [initialDefaultValue];
    }

    let value = initialValue;
    if (typeof initialValue === 'string') {
      value = [initialValue];
    }

    return {
      role: 'CheckboxGroup',
      ...boxProps,
      className,
      children: (
        <Set orientation={orientation} spacing={spacing}>
          {options.map((option, i) => (
            <Checkbox
              key={i}
              {...option}
              // @ts-ignore
              checked={value ? value.includes(option.value) : undefined}
              // @ts-ignore
              defaultChecked={defaultValue ? defaultValue.includes(option.value) : undefined}
              name={name}
              onChange={onChange}
              overrides={overrides}
              state={state || option.state}
              disabled={disabled || option.disabled}
            />
          ))}
        </Set>
      )
    };
  },
  { defaultProps: { orientation: 'vertical', spacing: 'minor-2' }, themeKey: 'CheckboxGroup' }
);

export const CheckboxGroup = createComponent<CheckboxGroupProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'CheckboxGroup'
  }
);

////////////////////////////////////////////////////////////////

export type LocalCheckboxGroupFieldProps = {
  /** Additional props for the CheckboxGroup component */
  checkboxGroupProps?: CheckboxGroupProps;
};
export type CheckboxGroupFieldProps = BoxProps & FieldWrapperProps & CheckboxGroupProps & LocalCheckboxGroupFieldProps;

const useCheckboxGroupFieldProps = createHook<CheckboxGroupFieldProps>(
  (props, { themeKey, themeKeyOverride }) => {
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
      themeKeyOverride,
      prevClassName: boxProps.className
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
              onChange={onChange}
              overrides={overrides}
              state={state}
              value={value}
              {...elementProps}
              {...checkboxGroupProps}
            />
          )}
        </FieldWrapper>
      )
    };
  },
  { themeKey: 'CheckboxGroupField' }
);

export const CheckboxGroupField = createComponent<CheckboxGroupFieldProps>(
  props => {
    const checkboxGroupFieldProps = useCheckboxGroupFieldProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: checkboxGroupFieldProps
    });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'fieldset'
    },
    themeKey: 'CheckboxGroupField'
  }
);
