// @flow
import React, { type Node, type Element } from 'react';

import type { Size } from '../types';
import Select from './Select';
import FieldWrapper from '../FieldWrapper';

type Props = {
  /** ID for the select field */
  a11yId?: string,
  /** An accessible label for the select field */
  a11yLabel?: string,
  autoComplete?: string,
  /** Automatically focus the select field */
  autoFocus?: boolean,
  children: Node,
  className?: string,
  /** Default value of the select field */
  defaultValue?: string,
  description?: string | Element<any>,
  /** Disables the select field */
  disabled?: boolean,
  hint?: string | Element<any>,
  /** Makes the select field span full width */
  isFullWidth?: boolean,
  /** Adds a cute loading indicator to the select field */
  isLoading?: boolean,
  isOptional?: boolean,
  /** Makes the select field required and sets aria-invalid to true */
  isRequired?: boolean,
  label?: string | Element<any>,
  /** Name of the select field */
  name?: string,
  /** Select field options */
  options: Array<{ label: string, value: string | boolean | Object, disabled: boolean }>,
  /** Hint text to display */
  placeholder?: string,
  /** Alters the size of the select field. Can be "small", "medium" or "large" */
  size?: Size,
  /** State of the select field. Can be any color in the palette. */
  state?: string,
  validationText?: string,
  /** Value of the select field */
  value?: string,
  /** Function to invoke when focus is lost */
  onBlur?: Function,
  /** Function to invoke when the select field has changed */
  onChange?: Function,
  /** Function to invoke when the select field is focused */
  onFocus?: Function
};

const SelectField = ({
  a11yId,
  description,
  hint,
  isFullWidth,
  isOptional,
  isRequired,
  label,
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
    <Select {...props} />
  </FieldWrapper>
);

SelectField.defaultProps = {
  a11yId: undefined,
  a11yLabel: undefined,
  autoComplete: undefined,
  autoFocus: false,
  className: undefined,
  defaultValue: undefined,
  description: undefined,
  disabled: false,
  hint: undefined,
  isFullWidth: false,
  isLoading: false,
  isOptional: undefined,
  isRequired: false,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  placeholder: undefined,
  size: 'default',
  state: undefined,
  validationText: undefined,
  value: undefined
};

export default SelectField;
