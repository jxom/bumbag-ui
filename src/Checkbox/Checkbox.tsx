import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LabelProps as ReakitLabelProps } from 'reakit/ts';

import Text from '../Text';
import _Checkbox, { CheckboxIcon, HiddenCheckbox } from './styled';

export type LocalCheckboxProps = {
  /** Automatically focus on the checkbox */
  autoFocus?: boolean;
  checked?: boolean;
  className?: string;
  /** Is the checkbox checked by default? */
  defaultChecked?: boolean;
  /** Disables the checkbox */
  disabled?: boolean;
  /** ID for the checkbox */
  id?: string;
  indeterminate?: boolean;
  /** Makes the checkbox required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Checkbox label */
  label?: string;
  name?: string;
  /** State of the checkbox. Can be any color in the palette. */
  state?: string;
  /** Initial value of the checkbox */
  value?: string;
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Function to invoke when checkbox has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Function to invoke when checkbox is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export type CheckboxProps = LocalCheckboxProps & ReakitLabelProps;

export const Checkbox: React.FunctionComponent<LocalCheckboxProps> = ({
  autoFocus,
  checked,
  className,
  defaultChecked,
  disabled,
  id,
  indeterminate,
  isRequired,
  label,
  onBlur,
  onChange,
  onFocus,
  name,
  state,
  value,
  ...props
}) => (
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
      indeterminate={indeterminate}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
      state={state}
      type="checkbox"
      value={value}
    />
    <CheckboxIcon state={state} />
    {label && (
      <Text id="label" htmlFor={id} marginLeft="minor-2">
        {label}
      </Text>
    )}
  </_Checkbox>
);

export const checkboxPropTypes = {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  state: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};
Checkbox.propTypes = checkboxPropTypes;

export const checkboxDefaultProps = {
  autoFocus: false,
  checked: undefined,
  className: undefined,
  defaultChecked: undefined,
  disabled: false,
  id: undefined,
  indeterminate: false,
  isRequired: false,
  label: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  name: undefined,
  state: undefined,
  value: undefined
};
Checkbox.defaultProps = checkboxDefaultProps;

const C: React.FunctionComponent<CheckboxProps> = Checkbox;
export default C;
