import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Palette } from '../types';
import { useClassName, createComponent, createElement, createHook, useUniqueId, omit } from '../utils';
import { Box, BoxProps } from '../Box';
import { Label } from '../Label';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';

import * as styles from './Switch.styles';

export type LocalSwitchProps = {
  /** Automatically focus on the switch */
  autoFocus?: boolean;
  checked?: boolean;
  inputProps?: React.InputHTMLAttributes<any>;
  /** Is the switch checked by default? */
  defaultChecked?: boolean;
  /** Disables the switch */
  disabled?: boolean;
  /** Makes the switch required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Switch label */
  label?: string;
  palette?: Palette;
  name?: string;
  /** State of the switch. Can be any color in the palette. */
  state?: Palette;
  switchRef?: React.Ref<any>;
  /** Initial value of the switch */
  value?: boolean | string;
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Function to invoke when switch has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Function to invoke when switch is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export type SwitchProps = Omit<BoxProps, 'onBlur' | 'onChange' | 'onFocus'> & LocalSwitchProps;

const useProps = createHook<SwitchProps>(
  (props, { themeKey }) => {
    const {
      autoFocus,
      checked,
      inputProps,
      defaultChecked,
      disabled,
      isRequired,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      overrides,
      state,
      switchRef,
      value,
      ...restProps
    } = props;

    const boxProps = Box.useProps({ ...restProps, overrides });

    const className = useClassName({
      style: styles.Switch,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });
    const switchIconClassName = useClassName({
      style: styles.SwitchIcon,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Icon',
    });
    const hiddenSwitchClassName = useClassName({
      style: styles.HiddenSwitch,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'HiddenInput',
    });
    const switchLabelClassName = useClassName({
      style: styles.SwitchLabel,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Label',
    });

    const labelId = useUniqueId();
    const switchId = useUniqueId();

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
            ref={switchRef}
            use="input"
            className={hiddenSwitchClassName}
            // @ts-ignore
            autoFocus={autoFocus}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            id={switchId}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            overrides={overrides}
            name={name}
            type="checkbox"
            // @ts-ignore
            value={value}
            {...inputProps}
          />
          <Box className={switchIconClassName} overrides={overrides} />
          {label && (
            <Label
              use="span"
              id={labelId}
              className={switchLabelClassName}
              htmlFor={switchId}
              overrides={overrides}
              marginLeft="minor-2"
            >
              {label}
            </Label>
          )}
        </React.Fragment>
      ),
    };
  },
  { themeKey: 'Switch' }
);

export const Switch = createComponent<SwitchProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Switch',
    },
    defaultProps: {
      use: 'label',
    },
    themeKey: 'Switch',
  }
);

////////////////////////////////////////////////////////////////

export type LocalSwitchFieldProps = {
  /** Label for the switch */
  switchLabel?: string;
  /** Additional props for the Switch component */
  switchProps?: SwitchProps;
};
export type SwitchFieldProps = BoxProps & FieldWrapperProps & SwitchProps & LocalSwitchFieldProps;

const useSwitchFieldProps = createHook<SwitchFieldProps>(
  (props, { themeKey }) => {
    const {
      autoFocus,
      checked,
      switchLabel,
      switchProps,
      description,
      defaultChecked,
      disabled,
      hint,
      isOptional,
      isRequired,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      overrides,
      state,
      switchRef,
      tooltip,
      tooltipTriggerComponent,
      validationText,
      value,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.SwitchField,
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
            <Switch
              autoFocus={autoFocus}
              checked={checked}
              defaultChecked={defaultChecked}
              disabled={disabled}
              isRequired={isRequired}
              label={switchLabel}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              onFocus={onFocus}
              overrides={overrides}
              state={state}
              switchRef={switchRef}
              value={value}
              {...omit(elementProps, 'id')}
              {...switchProps}
              inputProps={{
                id: elementProps.id,
                ...switchProps.inputProps,
              }}
            />
          )}
        </FieldWrapper>
      ),
    };
  },
  { defaultProps: { switchProps: {} }, themeKey: 'SwitchField' }
);

export const SwitchField = createComponent<SwitchFieldProps>(
  (props) => {
    const switchFieldProps = useSwitchFieldProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: switchFieldProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'SwitchField',
    },
    themeKey: 'SwitchField',
  }
);
