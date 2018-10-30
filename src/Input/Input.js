// @flow
import React, { type Node } from 'react';

import type { Size } from '../types';
import { InlineBlock } from '../primitives';
import _Input, { LoadingSpinner } from './styled';

type Props = {
  /** An accessible label for the input */
  a11yLabel?: string,
  as?: any,
  autoComplete?: boolean,
  /** Automatically focus on the input */
  autoFocus?: boolean,
  children: Node,
  className?: string,
  /** Default value of the input */
  defaultValue?: string,
  /** Disables the input */
  disabled?: boolean,
  /** ID for the input */
  id?: string,
  /** Makes the input span full width */
  isFullWidth?: boolean,
  /** Adds a cute loading indicator to the input field */
  isLoading?: boolean,
  /** Makes the input required and sets aria-invalid to true */
  isRequired?: boolean,
  /** Name of the input field */
  name?: string,
  /** Alters the size of the input. Can be "small", "medium" or "large" */
  size?: Size,
  /** The maximum (numeric or date-time) value for the input. Must not be less than its minimum (min attribute) value. */
  max?: number,
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the maximum number of characters (in UTF-16 code units) that the user can enter. For other control types, it is ignored. */
  maxLength?: number,
  /** The minimum (numeric or date-time) value for this input, which must not be greater than its maximum (max attribute) value. */
  min?: number,
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the minimum number of characters (in UTF-16 code points) that the user can enter. For other control types, it is ignored. */
  minLength?: number,
  /** This prop indicates whether the user can enter more than one value. This attribute only applies when the type attribute is set to email or file. */
  multiple?: boolean,
  /** Regex pattern to apply to the input */
  pattern?: string,
  /** Hint text to display */
  placeholder?: string,
  /** This prop prevents the user from modifying the value of the input. It is ignored if the value of the type attribute is hidden, range, color, checkbox, radio, file, or a button type (such as button or submit). */
  readOnly?: boolean,
  /** Setting the value of this attribute to true indicates that the element needs to have its spelling and grammar checked. The value default indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value. The value false indicates that the element should not be checked. */
  spellCheck?: boolean,
  /** Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. */
  step?: number,
  /** State of the input. Can be any color in the palette. */
  state?: string,
  /** Specify the type of input. */
  type?: string,
  /** Value of the input */
  value?: string,
  /** Function to invoke when focus is lost */
  onBlur?: Function,
  /** Function to invoke when input has changed */
  onChange?: Function,
  /** Function to invoke when input is focused */
  onFocus?: Function
};

const Input = ({
  a11yLabel,
  autoComplete,
  autoFocus,
  className,
  defaultValue,
  disabled,
  id,
  isFullWidth,
  isLoading,
  isRequired,
  max,
  maxLength,
  min,
  minLength,
  multiple,
  onBlur,
  onChange,
  onFocus,
  name,
  pattern,
  placeholder,
  readOnly,
  size,
  spellCheck,
  state,
  step,
  type,
  value,
  ...props
}: Props) => (
  <InlineBlock relative {...props}>
    <_Input
      aria-invalid={state === 'danger'}
      aria-label={a11yLabel}
      aria-required={isRequired}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      isFullWidth={isFullWidth}
      max={max}
      maxLength={maxLength}
      min={min}
      minLength={minLength}
      multiple={multiple}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
      readOnly={readOnly}
      pattern={pattern}
      placeholder={placeholder}
      size={size}
      spellCheck={spellCheck}
      state={state}
      step={step}
      type={type}
      value={value}
    />
    {isLoading && <LoadingSpinner color="text" />}
  </InlineBlock>
);

Input.defaultProps = {
  a11yLabel: undefined,
  as: undefined,
  autoComplete: false,
  autoFocus: false,
  className: undefined,
  defaultValue: undefined,
  disabled: false,
  id: undefined,
  isFullWidth: false,
  isLoading: false,
  isRequired: false,
  max: undefined,
  maxLength: undefined,
  min: undefined,
  minLength: undefined,
  multiple: false,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  pattern: undefined,
  placeholder: undefined,
  readOnly: false,
  spellCheck: false,
  size: 'default',
  state: undefined,
  step: undefined,
  type: 'text',
  value: undefined
};

export default Input;
