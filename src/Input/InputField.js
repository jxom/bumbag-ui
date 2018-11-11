// @flow
import React, { type Node, type Element } from 'react';
import ConditionalWrap from 'conditional-wrap';

import type { Size } from '../types';
import Group from '../Group';
import Input from './Input';
import FieldWrapper from '../FieldWrapper';

type Props = {
  /** An accessible identifier for the input */
  a11yId?: string,
  /** An accessible label for the input */
  a11yLabel?: string,
  as?: any,
  autoComplete?: string,
  /** Automatically focus on the input */
  autoFocus?: boolean,
  /** Addon component to the input (before). Similar to the addon components in Input. */
  addonBefore?: Element<any>,
  /** Addon component to the input (after). Similar to the addon components in Input. */
  addonAfter?: Element<any>,
  children: Node,
  className?: string,
  /** Default value of the input */
  defaultValue?: string,
  description?: string | Element<any>,
  /** Disables the input */
  disabled?: boolean,
  hint?: string | Element<any>,
  /** Makes the input span full width */
  isFullWidth?: boolean,
  /** Adds a cute loading indicator to the input field */
  isLoading?: boolean,
  isOptional?: boolean,
  /** Makes the input required and sets aria-invalid to true */
  isRequired?: boolean,
  /** If addonBefore or addonAfter exists, then the addons will render vertically. */
  isVertical?: boolean,
  label?: string | Element<any>,
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
  validationText?: string,
  /** Value of the input */
  value?: string,
  /** Function to invoke when focus is lost */
  onBlur?: Function,
  /** Function to invoke when input has changed */
  onChange?: Function,
  /** Function to invoke when input is focused */
  onFocus?: Function
};

const InputField = ({
  addonBefore,
  addonAfter,
  a11yId,
  description,
  hint,
  isFullWidth,
  isOptional,
  isRequired,
  isVertical,
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
    <ConditionalWrap
      condition={addonBefore || addonAfter}
      wrap={children => <Group isVertical={isVertical}>{children}</Group>}
    >
      {addonBefore}
      <Input {...props} />
      {addonAfter}
    </ConditionalWrap>
  </FieldWrapper>
);

InputField.defaultProps = {
  addonBefore: undefined,
  addonAfter: undefined,
  a11yId: undefined,
  a11yLabel: undefined,
  as: undefined,
  autoComplete: undefined,
  autoFocus: false,
  className: undefined,
  defaultValue: undefined,
  description: undefined,
  disabled: false,
  hint: undefined,
  isFullWidth: false,
  isLoading: false,
  isOptional: false,
  isRequired: false,
  isVertical: false,
  label: undefined,
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
  readOnly: undefined,
  spellCheck: undefined,
  size: 'default',
  state: undefined,
  step: undefined,
  type: 'text',
  validationText: undefined,
  value: undefined
};

export default InputField;
