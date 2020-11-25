import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import { Set, SetProps } from '../Set';

import { Radio, RadioProps } from './Radio';
import * as styles from './Radio.styles';

export type LocalRadioGroupProps = {
  /** Default value of the radio group */
  defaultValue?: string;
  /** Disables the radio group */
  disabled?: boolean;
  name: string;
  /** Are the radio inputs layed out horizontally? */
  orientation?: 'horizontal' | 'vertical';
  /** Radio group options */
  options: Array<RadioProps>;
  spacing?: SetProps['spacing'];
  /** State of the radio group. Can be any color in the palette. */
  state?: string;
  /** Controlled value of the radio group */
  value?: string;
  /** Function to invoke when radio group has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
};
export type RadioGroupProps = Omit<BoxProps, 'onChange'> & LocalRadioGroupProps;

const useProps = createHook<RadioGroupProps>(
  (props, { themeKey }) => {
    const {
      defaultValue,
      disabled,
      orientation,
      onChange,
      options,
      overrides,
      name,
      spacing,
      state,
      value,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.RadioGroup,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return {
      role: 'radiogroup',
      ...boxProps,
      className,
      children: (
        <Set orientation={orientation} overrides={overrides} spacing={spacing}>
          {options.map((option, i) => (
            <Radio
              key={i}
              {...option}
              checked={typeof value === 'undefined' ? undefined : option.value === value}
              defaultChecked={typeof defaultValue === 'undefined' ? undefined : option.value === defaultValue}
              name={name}
              onChange={onChange}
              overrides={overrides}
              state={state || option.state}
              disabled={disabled || option.disabled}
            />
          ))}
        </Set>
      ),
    };
  },
  { defaultProps: { orientation: 'vertical', spacing: 'minor-2' }, themeKey: 'RadioGroup' }
);

export const RadioGroup = createComponent<RadioGroupProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'RadioGroup',
    },
    themeKey: 'RadioGroup',
  }
);

////////////////////////////////////////////////////////////////

export type LocalRadioGroupFieldProps = {
  /** Additional props for the RadioGroup component */
  radioGroupProps?: RadioGroupProps;
};
export type RadioGroupFieldProps = BoxProps & FieldWrapperProps & RadioGroupProps & LocalRadioGroupFieldProps;

const useRadioGroupFieldProps = createHook<RadioGroupFieldProps>(
  (props, { themeKey }) => {
    const {
      defaultChecked,
      description,
      disabled,
      hint,
      orientation,
      isOptional,
      isRequired,
      label,
      name,
      options,
      onChange,
      overrides,
      radioGroupProps,
      state,
      tooltip,
      tooltipTriggerComponent,
      value,
      validationText,
      ...restProps
    } = props;

    const boxProps = Box.useProps({ ...restProps, overrides });

    const className = useClassName({
      style: styles.RadioGroupField,
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
            <RadioGroup
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
              {...radioGroupProps}
            />
          )}
        </FieldWrapper>
      ),
    };
  },
  { themeKey: 'RadioGroupField' }
);

export const RadioGroupField = createComponent<RadioGroupFieldProps>(
  (props) => {
    const radioGroupFieldProps = useRadioGroupFieldProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: radioGroupFieldProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'RadioGroupField',
    },
    defaultProps: {
      use: 'fieldset',
    },
    themeKey: 'RadioGroupField',
  }
);
