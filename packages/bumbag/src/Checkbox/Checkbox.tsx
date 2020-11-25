import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, omit, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';
import { Label } from '../Label';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';

import * as styles from './Checkbox.styles';

export type LocalCheckboxProps = {
  /** Automatically focus on the checkbox */
  autoFocus?: boolean;
  /** Indicates if the checkbox is checked. */
  checked?: boolean;
  /** Spreads the props onto the `<input>` element of the checkbox. */
  inputProps?: React.InputHTMLAttributes<any>;
  /** Is the checkbox checked by default? */
  defaultChecked?: boolean;
  /** Disables the checkbox */
  disabled?: boolean;
  /** Forwards the ref to the checkbox. */
  checkboxRef?: React.Ref<any>;
  /** Indicates if the checkbox is indeterminate. */
  indeterminate?: boolean;
  /** Makes the checkbox required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Checkbox label */
  label?: string;
  /** Sets the name of the checkbox. */
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
export type CheckboxProps = Omit<BoxProps, 'onBlur' | 'onChange' | 'onFocus'> & LocalCheckboxProps;

const useProps = createHook<CheckboxProps>(
  (props, { themeKey }) => {
    const {
      autoFocus,
      checked,
      checkboxRef,
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
      prevClassName: boxProps.className,
    });
    const checkboxIconClassName = useClassName({
      style: styles.CheckboxIcon,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Icon',
    });
    const hiddenCheckboxClassName = useClassName({
      style: styles.HiddenCheckbox,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'HiddenInput',
    });
    const checkboxLabelClassName = useClassName({
      style: styles.CheckboxLabel,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Label',
    });

    const labelId = useUniqueId();
    const checkboxId = useUniqueId();

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
            ref={checkboxRef}
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
      displayName: 'Checkbox',
    },
    defaultProps: {
      use: 'label',
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
  (props, { themeKey }) => {
    const {
      autoFocus,
      checked,
      checkboxLabel,
      checkboxProps,
      checkboxRef,
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
              checkboxRef={checkboxRef}
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
      displayName: 'CheckboxField',
    },
    themeKey: 'CheckboxField',
  }
);
