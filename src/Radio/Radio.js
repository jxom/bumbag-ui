// @flow
import React from 'react';

import Text from '../Text';
import _Radio, { RadioIcon, HiddenRadio } from './styled';

type Props = {
  /** An accessible label for the radio */
  a11yLabel?: string,
  /** Automatically focus on the radio */
  autoFocus?: boolean,
  checked?: boolean | string,
  className?: string,
  /** Default value of the radio */
  defaultValue?: string,
  /** Disables the radio */
  disabled?: boolean,
  /** ID for the radio */
  id?: string,
  /** Makes the radio required and sets aria-invalid to true */
  isRequired?: boolean,
  /** radio label */
  label: string,
  name?: string,
  /** State of the radio. Can be any color in the palette. */
  state?: string,
  /** Initial value of the radio */
  value?: string,
  /** Function to invoke when focus is lost */
  onBlur?: Function,
  /** Function to invoke when radio has changed */
  onChange?: Function,
  /** Function to invoke when radio is focused */
  onFocus?: Function
};

const Radio = ({
  a11yLabel,
  autoFocus,
  checked,
  className,
  defaultValue,
  disabled,
  id,
  isRequired,
  label,
  onBlur,
  onChange,
  onFocus,
  name,
  state,
  value,
  ...props
}: Props) => (
  <_Radio
    aria-describedby="label"
    aria-invalid={state === 'danger'}
    aria-label={a11yLabel}
    aria-required={isRequired}
    {...props}
  >
    <HiddenRadio
      autoFocus={autoFocus}
      checked={checked}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
      state={state}
      type="radio"
      value={value}
    />
    <RadioIcon state={state} />
    <Text id="label" marginLeft="xxsmall">
      {label}
    </Text>
  </_Radio>
);

Radio.defaultProps = {
  a11yLabel: null,
  autoFocus: false,
  checked: undefined,
  className: null,
  defaultValue: undefined,
  disabled: false,
  id: null,
  isRequired: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  name: null,
  state: null,
  value: undefined
};

export default Radio;
