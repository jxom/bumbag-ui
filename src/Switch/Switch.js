// @flow
import React from 'react';

import { type Palette } from '../types';
import Text from '../Text';
import _Switch, { HiddenSwitch, SwitchIcon } from './styled';

type Props = {
  /** Automatically focus on the switch */
  autoFocus?: boolean,
  checked?: boolean,
  className?: string,
  /** Is the switch checked by default? */
  defaultChecked?: boolean,
  /** Disables the switch */
  disabled?: boolean,
  /** ID for the switch */
  id?: string,
  /** Makes the switch required and sets aria-invalid to true */
  isRequired?: boolean,
  /** Switch label */
  label: string,
  name?: string,
  palette?: Palette,
  /** State of the switch. Can be any color in the palette. */
  state?: string,
  /** Initial value of the switch */
  value?: string,
  /** Function to invoke when focus is lost */
  onBlur?: Function,
  /** Function to invoke when switch has changed */
  onChange?: Function,
  /** Function to invoke when switch is focused */
  onFocus?: Function
};

const Switch = ({
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
  palette,
  state,
  value,
  ...props
}: Props) => (
  <_Switch
    aria-describedby="label"
    aria-invalid={state === 'danger'}
    aria-label={label}
    aria-required={isRequired}
    disabled={disabled}
    {...props}
  >
    <HiddenSwitch
      autoFocus={autoFocus}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
      palette={palette}
      state={state}
      type="checkbox"
      value={value}
    />
    <SwitchIcon state={state} />
    <Text id="label" htmlFor={id} marginLeft="xxsmall">
      {label}
    </Text>
  </_Switch>
);

Switch.defaultProps = {
  autoFocus: false,
  checked: undefined,
  className: undefined,
  defaultChecked: undefined,
  disabled: false,
  id: undefined,
  isRequired: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  palette: undefined,
  name: undefined,
  state: undefined,
  value: undefined
};

export default Switch;
