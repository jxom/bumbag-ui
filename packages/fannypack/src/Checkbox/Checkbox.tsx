import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, omit, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';
import { Label } from '../Label';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';

import * as styles from './styles';

export type LocalCheckboxProps = {
  /** Automatically focus on the checkbox */
  autoFocus?: boolean;
  checked?: boolean;
  inputProps?: React.InputHTMLAttributes<any>;
  /** Is the checkbox checked by default? */
  defaultChecked?: boolean;
  /** Disables the checkbox */
  disabled?: boolean;
  indeterminate?: boolean;
  /** Makes the checkbox required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Checkbox label */
  label?: string;
  name?: string;
  /** State of the checkbox. Can be any color in the palette. */
  state?: string;
  /** Initial value of the checkbox */
  value?: boolean | string;
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Function to invoke when checkbox has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Function to invoke when checkbox is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export type CheckboxProps = BoxProps & LocalCheckboxProps;

const useProps = createHook<CheckboxProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      autoFocus,
      checked,
      inputProps,
      defaultChecked,
      disabled,
      indeterminate,
      isRequired,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      state,
      value,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.Checkbox,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
    });
    const checkboxIconClassName = useClassName({
      style: styles.CheckboxIcon,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Icon',
    });
    const hiddenCheckboxClassName = useClassName({
      style: styles.HiddenCheckbox,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'HiddenInput',
    });
    const checkboxLabelClassName = useClassName({
      style: styles.CheckboxLabel,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Label',
    });

    const labelId = useUniqueId('label');
    const checkboxId = useUniqueId('checkbox');

    return {
      ...boxProps,
      'aria-describedby': labelId,
      'aria-invalid': state === 'danger',
      'aria-required': isRequired,
      className,
      children: (
        <React.Fragment>
          {/**
           // @ts-ignore */}
          <Box
            use="input"
            className={hiddenCheckboxClassName}
            // @ts-ignore
            autoFocus={autoFocus}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            id={checkboxId}
            // @ts-ignore
            indeterminate={indeterminate}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            name={name}
            type="checkbox"
            // @ts-ignore
            value={value}
            {...inputProps}
          />
          <Box className={checkboxIconClassName} />
          {label && (
            <Label use="span" id={labelId} className={checkboxLabelClassName} htmlFor={checkboxId} marginLeft="minor-2">
              {label}
            </Label>
          )}
        </React.Fragment>
      ),
    };
  },
  { themeKey: 'Checkbox' }
);

export const Checkbox = createComponent<CheckboxProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
    },
    defaultProps: {
      use: Label,
    },
    themeKey: 'Checkbox',
  }
);

////////////////////////////////////////////////////////////////

export type LocalCheckboxFieldProps = {
  /** Label for the checkbox */
  checkboxLabel?: string;
  /** Additional props for the Checkbox component */
  checkboxProps?: CheckboxProps;
};
export type CheckboxFieldProps = BoxProps & FieldWrapperProps & CheckboxProps & LocalCheckboxFieldProps;

const useCheckboxFieldProps = createHook<CheckboxFieldProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      autoFocus,
      checked,
      checkboxLabel,
      checkboxProps,
      description,
      defaultChecked,
      disabled,
      hint,
      indeterminate,
      isOptional,
      isRequired,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      overrides,
      state,
      tooltip,
      tooltipTriggerComponent,
      validationText,
      value,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.CheckboxField,
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
            <Checkbox
              autoFocus={autoFocus}
              checked={checked}
              defaultChecked={defaultChecked}
              disabled={disabled}
              indeterminate={indeterminate}
              isRequired={isRequired}
              label={checkboxLabel}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              onFocus={onFocus}
              overrides={overrides}
              state={state}
              value={value}
              {...omit(elementProps, 'id')}
              {...checkboxProps}
              inputProps={{
                id: elementProps.id,
                ...checkboxProps.inputProps,
              }}
            />
          )}
        </FieldWrapper>
      ),
    };
  },
  { defaultProps: { checkboxProps: {} }, themeKey: 'CheckboxField' }
);

export const CheckboxField = createComponent<CheckboxFieldProps>(
  (props) => {
    const checkboxFieldProps = useCheckboxFieldProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: checkboxFieldProps,
    });
  },
  {
    attach: {
      useProps,
    },
    themeKey: 'CheckboxField',
  }
);
