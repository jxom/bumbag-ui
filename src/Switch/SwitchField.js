// @flow
import React, { type Element } from 'react';

import { type Palette } from '../types';
import Switch from './Switch';
import FieldWrapper from '../FieldWrapper';

type Props = {
  a11yId?: string,
  /** Automatically focus on the switch */
  autoFocus?: boolean,
  checked?: boolean,
  className?: string,
  /** Is the switch checked by default? */
  defaultChecked?: boolean,
  description?: string | Element<any>,
  /** Disables the switch */
  disabled?: boolean,
  hint?: string | Element<any>,
  /** ID for the switch */
  id?: string,
  isFullWidth?: boolean,
  isOptional?: boolean,
  /** Makes the switch required and sets aria-invalid to true */
  isRequired?: boolean,
  label?: string | Element<any>,
  name?: string,
  palette?: Palette,
  /** State of the switch. Can be any color in the palette. */
  state?: string,
  /** Switch label */
  switchLabel?: string,
  /** Initial value of the switch */
  value?: string,
  validationText?: string,
  /** Function to invoke when focus is lost */
  onBlur?: Function,
  /** Function to invoke when switch has changed */
  onChange?: Function,
  /** Function to invoke when switch is focused */
  onFocus?: Function
};

const SwitchField = ({
  a11yId,
  description,
  hint,
  isFullWidth,
  isOptional,
  isRequired,
  label,
  switchLabel,
  state,
  validationText,
  ...props
}: Props) => (
  <FieldWrapper
    a11yId={a11yId}
    description={description}
    hint={hint}
    isFullWidth={isFullWidth}
    isOptional={isOptional}
    isRequired={isRequired}
    label={label}
    state={state}
    validationText={validationText}
  >
    <Switch label={switchLabel} {...props} />
  </FieldWrapper>
);

SwitchField.defaultProps = {
  a11yId: undefined,
  autoFocus: false,
  checked: undefined,
  className: undefined,
  defaultChecked: undefined,
  description: undefined,
  disabled: false,
  hint: undefined,
  id: undefined,
  isFullWidth: false,
  isOptional: undefined,
  isRequired: false,
  label: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  palette: undefined,
  name: undefined,
  state: undefined,
  switchLabel: undefined,
  validationText: undefined,
  value: undefined
};

export default SwitchField;
