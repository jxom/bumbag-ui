import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import { Set, SetProps } from '../Set';

import { Switch, SwitchProps } from './Switch';
import * as styles from './styles';

export type LocalSwitchGroupProps = {
  /** Default value(s) of the switch group */
  defaultValue?: Array<string> | string;
  /** Disables the switch group */
  disabled?: boolean;
  /** Are the switch inputs layed out horizontally? */
  orientation?: 'vertical' | 'horizontal';
  name: string;
  /** Switch group options */
  options: Array<SwitchProps>;
  spacing?: SetProps['spacing'];
  /** State of the switch group. Can be any color in the palette. */
  state?: string;
  /** Controlled value of the switch group */
  value?: Array<string> | string;
  /** Function to invoke when switch group has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
};
export type SwitchGroupProps = BoxProps & LocalSwitchGroupProps;

const useProps = createHook<SwitchGroupProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      defaultValue: initialDefaultValue,
      disabled,
      orientation,
      onChange,
      options,
      overrides,
      name,
      spacing,
      state,
      value: initialValue,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.SwitchGroup,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
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
      role: 'group',
      ...boxProps,
      className,
      children: (
        <Set orientation={orientation} spacing={spacing}>
          {options.map((option, i) => (
            <Switch
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
      ),
    };
  },
  { defaultProps: { orientation: 'vertical', spacing: 'minor-2' }, themeKey: 'SwitchGroup' }
);

export const SwitchGroup = createComponent<SwitchGroupProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'SwitchGroup',
    },
    themeKey: 'SwitchGroup',
  }
);

////////////////////////////////////////////////////////////////

export type LocalSwitchGroupFieldProps = {
  /** Additional props for the SwitchGroup component */
  switchGroupProps?: SwitchGroupProps;
};
export type SwitchGroupFieldProps = BoxProps & FieldWrapperProps & SwitchGroupProps & LocalSwitchGroupFieldProps;

const useSwitchGroupFieldProps = createHook<SwitchGroupFieldProps>(
  (props, { themeKey, themeKeyOverride }) => {
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
      switchGroupProps,
      state,
      tooltip,
      tooltipTriggerComponent,
      value,
      validationText,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.SwitchGroupField,
      styleProps: props,
      themeKey,
      themeKeyOverride,
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
            <SwitchGroup
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
              {...switchGroupProps}
            />
          )}
        </FieldWrapper>
      ),
    };
  },
  { themeKey: 'SwitchGroupField' }
);

export const SwitchGroupField = createComponent<SwitchGroupFieldProps>(
  (props) => {
    const switchGroupFieldProps = useSwitchGroupFieldProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: switchGroupFieldProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'SwitchGroupField',
    },
    defaultProps: {
      use: 'fieldset',
    },
    themeKey: 'SwitchGroupField',
  }
);
