// @flow
import React, { type Element } from 'react';

import RadioGroup from './RadioGroup';
import FieldWrapper from '../FieldWrapper';

type Props = {
  /** An accessible ID for the radio group */
  a11yId?: string,
  /** An accessible label for the radio group */
  a11yLabel?: string,
  className?: string,
  /** Default value of the radio group */
  defaultValue?: string | boolean | Object,
  description?: string | Element<any>,
  /** Disables the radio group */
  disabled?: boolean,
  hint?: string | Element<any>,
  isFullWidth?: boolean,
  isOptional?: boolean,
  isRequired?: boolean,
  label?: string | Element<any>,
  name: string,
  /** Radio group options */
  options: Array<{ disabled: boolean, label: string, value: string | boolean | Object }>,
  /** State of the radio group. Can be any color in the palette. */
  state?: string,
  validationText?: string,
  /** Controlled value of the radio group */
  value?: string,
  /** Function to invoke when radio group has changed */
  onChange?: Function
};

const InputField = ({
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
    <RadioGroup {...props} />
  </FieldWrapper>
);

InputField.defaultProps = {
  a11yId: undefined,
  a11yLabel: undefined,
  className: undefined,
  defaultValue: undefined,
  description: undefined,
  disabled: false,
  hint: undefined,
  isFullWidth: false,
  isOptional: undefined,
  isRequired: undefined,
  label: undefined,
  onChange: undefined,
  name: undefined,
  state: undefined,
  value: undefined,
  validationText: undefined
};

export default InputField;
