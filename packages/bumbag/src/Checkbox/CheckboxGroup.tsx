import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import { Set, SetProps } from '../Set';

import { Checkbox, CheckboxProps } from './Checkbox';
import * as styles from './styles';
import { addColorModeBodyClassName } from '../ColorMode';

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

    const [controlledValue, setControlledValue] = React.useState(defaultValue || []);
    const values = typeof value !== 'undefined' ? value : controlledValue;

    ////////////////////////////////////////////

    const handleChange = React.useCallback(
      (e) => {
        const newValue = e.target.value;

        let newValues = [];
        if (values.includes(newValue)) {
          newValues = (values || []).filter((val) => val !== newValue);
        } else {
          newValues = [...(values || []), newValue];
        }

        if (typeof value !== 'undefined') {
          onChange && onChange(newValues, newValue);
        } else {
          setControlledValue(newValues);
        }
      },
      [onChange, value, values]
    );

    const handleBlur = React.useCallback(() => {
      onBlur && onBlur(values);
    }, [onBlur, values]);

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
              // @ts-ignore
              checked={values ? values.includes(option.value) : false}
              name={name}
              onBlur={handleBlur}
              onChange={handleChange}
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
