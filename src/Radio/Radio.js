// @flow
import React from 'react';

import Text from '../Text';
import _Radio, { RadioIcon, HiddenRadio } from './styled';

type Props = {
  /** Automatically focus on the radio */
  autoFocus?: boolean,
  checked?: boolean | string,
  className?: string,
  /** Is the radio checked by default */
  defaultChecked?: boolean,
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
  /** Controlled value of the radio */
  value?: string | boolean | Object,
  /** Function to invoke when focus is lost */
  onBlur?: Function,
  /** Function to invoke when radio has changed */
  onChange?: Function,
  /** Function to invoke when radio is focused */
  onFocus?: Function
};

const Radio = ({
  autoFocus,
  checked,
  className,
  defaultChecked,
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
    aria-label={label}
    aria-required={isRequired}
    {...props}
  >
    <HiddenRadio
      autoFocus={autoFocus}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={id}
      onBlur={onBlur}
      onChange={onChange ? e => onChange({ target: { value: JSON.parse(e.target.value) } }) : undefined}
      onFocus={onFocus}
      name={name}
      state={state}
      type="radio"
      value={JSON.stringify(value)}
    />
    <RadioIcon state={state} />
    <Text id="label" marginLeft="xxsmall">
      {label}
    </Text>
  </_Radio>
);

Radio.defaultProps = {
  autoFocus: false,
  checked: undefined,
  className: undefined,
  defaultChecked: false,
  disabled: false,
  id: undefined,
  isRequired: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  name: undefined,
  state: undefined,
  value: undefined
};

export default Radio;
