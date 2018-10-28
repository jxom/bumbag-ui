// @flow
import React from 'react';

import Text from '../Text';
import _Checkbox, { CheckboxIcon, HiddenCheckbox } from './styled';

type Props = {
  /** Automatically focus on the checkbox */
  autoFocus?: boolean,
  checked?: boolean,
  className?: string,
  /** Is the checkbox checked by default? */
  defaultChecked?: boolean,
  /** Disables the checkbox */
  disabled?: boolean,
  /** ID for the checkbox */
  id?: string,
  /** Makes the checkbox required and sets aria-invalid to true */
  isRequired?: boolean,
  /** Checkbox label */
  label: string,
  name?: string,
  /** State of the checkbox. Can be any color in the palette. */
  state?: string,
  /** Initial value of the checkbox */
  value?: string,
  /** Function to invoke when focus is lost */
  onBlur?: Function,
  /** Function to invoke when checkbox has changed */
  onChange?: Function,
  /** Function to invoke when checkbox is focused */
  onFocus?: Function
};

const Checkbox = ({
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
  <_Checkbox
    aria-describedby="label"
    aria-invalid={state === 'danger'}
    aria-label={label}
    aria-required={isRequired}
    {...props}
  >
    <HiddenCheckbox
      autoFocus={autoFocus}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
      state={state}
      type="checkbox"
      value={value}
    />
    <CheckboxIcon state={state} />
    <Text id="label" marginLeft="xxsmall">
      {label}
    </Text>
  </_Checkbox>
);

Checkbox.defaultProps = {
  autoFocus: false,
  checked: undefined,
  className: null,
  defaultChecked: undefined,
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

export default Checkbox;
