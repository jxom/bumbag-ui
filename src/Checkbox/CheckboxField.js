// @flow
import React, { type Element } from 'react';

import Checkbox from './Checkbox';
import FieldWrapper from '../FieldWrapper';

type Props = {
  a11yId?: string,
  /** Automatically focus on the checkbox */
  autoFocus?: boolean,
  checkboxLabel: string,
  checked?: boolean,
  className?: string,
  /** Is the checkbox checked by default? */
  defaultChecked?: boolean,
  description?: string | Element<any>,
  /** Disables the checkbox */
  disabled?: boolean,
  hint?: string | Element<any>,
  /** ID for the checkbox */
  id?: string,
  indeterminate?: boolean,
  isFullWidth?: boolean,
  isOptional?: boolean,
  /** Makes the checkbox required and sets aria-invalid to true */
  isRequired?: boolean,
  /** Checkbox label */
  label?: string | Element<any>,
  name?: string,
  /** State of the checkbox. Can be any color in the palette. */
  state?: string,
  validationText?: string,
  /** Initial value of the checkbox */
  value?: string,
  /** Function to invoke when focus is lost */
  onBlur?: Function,
  /** Function to invoke when checkbox has changed */
  onChange?: Function,
  /** Function to invoke when checkbox is focused */
  onFocus?: Function
};

const CheckboxField = ({
  a11yId,
  checkboxLabel,
  description,
  hint,
  label,
  indeterminate,
  isFullWidth,
  isOptional,
  isRequired,
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
    {({ elementProps }) => <Checkbox label={checkboxLabel} {...props} {...elementProps} />}
  </FieldWrapper>
);

CheckboxField.defaultProps = {
  a11yId: undefined,
  autoFocus: false,
  checked: undefined,
  className: undefined,
  defaultChecked: undefined,
  description: undefined,
  disabled: false,
  hint: undefined,
  id: undefined,
  indeterminate: false,
  isFullWidth: false,
  isOptional: false,
  isRequired: false,
  label: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  name: undefined,
  state: undefined,
  validationText: undefined,
  value: undefined
};

export default CheckboxField;
