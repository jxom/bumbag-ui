import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { LabelProps as ReakitLabelProps } from 'reakit/ts';

import Text from '../Text';
import _Radio, { RadioIcon, HiddenRadio } from './styled';

export type LocalRadioProps = {
  /** An accessible id for the radio */
  a11yId?: string;
  /** Automatically focus on the radio */
  autoFocus?: boolean;
  checked?: boolean | string;
  className?: string;
  /** Is the radio checked by default */
  defaultChecked?: boolean;
  /** Disables the radio */
  disabled?: boolean;
  /** Makes the radio required and sets aria-invalid to true */
  isRequired?: boolean;
  /** radio label */
  label: string;
  name?: string;
  /** State of the radio. Can be any color in the palette. */
  state?: string;
  /** Controlled value of the radio */
  value?: string;
  /** Function to invoke when focus is lost */
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void;
  /** Function to invoke when input has changed */
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
  /** Function to invoke when input is focused */
  onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
};
export type RadioProps = ReakitLabelProps & LocalRadioProps;

export const Radio: React.FunctionComponent<LocalRadioProps> = ({
  a11yId,
  autoFocus,
  checked,
  className,
  defaultChecked,
  disabled,
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
      id={a11yId}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
      state={state}
      type="radio"
      value={value}
    />
    <RadioIcon state={state} />
    <Text id="label" htmlFor={a11yId} marginLeft="xxsmall">
      {label}
    </Text>
  </_Radio>
);

Radio.propTypes = {
  a11yId: PropTypes.string,
  autoFocus: PropTypes.bool,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  name: PropTypes.string,
  state: PropTypes.string,
  value: PropTypes.string
};
Radio.defaultProps = {
  a11yId: undefined,
  autoFocus: false,
  checked: undefined,
  className: undefined,
  defaultChecked: undefined,
  disabled: false,
  isRequired: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  name: undefined,
  state: undefined,
  value: undefined
};

// @ts-ignore
const C: React.FunctionComponent<RadioProps> = Radio;
export default C;
