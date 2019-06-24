import * as React from 'react';
import * as PropTypes from 'prop-types';
import { InputProps as ReakitInputProps } from 'reakit/ts';
// @ts-ignore
import InputMask from 'react-input-mask';

import { InlineFlex } from '../primitives';
import { Omit, Size, sizePropType } from '../types';
import { IconProps } from '../Icon/Icon';
import _Input, { Icon, InputWrapper, LoadingSpinner } from './styled';

export type LocalInputProps = {
  after?: React.ReactElement<any>;
  /** An accessible identifier for the input */
  a11yId?: string;
  /** An accessible label for the input */
  a11yLabel?: string;
  alwaysShowMask?: boolean;
  autoComplete?: string;
  /** Automatically focus on the input */
  autoFocus?: boolean;
  before?: React.ReactElement<any>;
  children?: React.ReactNode;
  className?: string;
  /** Default value of the input */
  defaultValue?: string;
  /** Disables the input */
  disabled?: boolean;
  inputRef?: React.RefObject<any>;
  /** Adds a cute loading indicator to the input field */
  isLoading?: boolean;
  /** Makes the input required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Name of the input field */
  name?: string;
  /** Alters the size of the input. Can be "small", "medium" or "large" */
  size?: Size;
  mask?: string;
  maskChar?: string;
  /** The maximum (numeric or date-time) value for the input. Must not be less than its minimum (min attribute) value. */
  max?: number;
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the maximum number of characters (in UTF-16 code units) that the user can enter. For other control types, it is ignored. */
  maxLength?: number;
  /** The minimum (numeric or date-time) value for this input, which must not be greater than its maximum (max attribute) value. */
  min?: number;
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the minimum number of characters (in UTF-16 code points) that the user can enter. For other control types, it is ignored. */
  minLength?: number;
  /** This prop indicates whether the user can enter more than one value. This attribute only applies when the type attribute is set to email or file. */
  multiple?: boolean;
  /** Regex pattern to apply to the input */
  pattern?: string;
  /** Hint text to display */
  placeholder?: string;
  /** This prop prevents the user from modifying the value of the input. It is ignored if the value of the type attribute is hidden, range, color, checkbox, radio, file, or a button type (such as button or submit). */
  readOnly?: boolean;
  /** Setting the value of this attribute to true indicates that the element needs to have its spelling and grammar checked. The value default indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value. The value false indicates that the element should not be checked. */
  spellCheck?: boolean;
  /** Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. */
  step?: number;
  /** State of the input. Can be any color in the palette. */
  state?: string;
  /** Specify the type of input. */
  type?: string;
  /** Value of the input */
  value?: string;
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Function to invoke when input has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Function to invoke when input is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export type InputProps = Omit<ReakitInputProps, 'size'> & LocalInputProps;
export type InputComponents = {
  Icon: React.FunctionComponent<IconProps>;
};

export const Input: React.FunctionComponent<LocalInputProps> & InputComponents = ({
  a11yLabel,
  a11yId,
  alwaysShowMask,
  after,
  autoComplete,
  autoFocus,
  before,
  defaultValue,
  disabled,
  inputRef,
  isLoading,
  isRequired,
  mask,
  maskChar,
  max,
  maxLength,
  min,
  minLength,
  multiple,
  name,
  onBlur,
  onChange,
  onFocus,
  pattern,
  placeholder,
  readOnly,
  spellCheck,
  step,
  type,
  size,
  state,
  value,
  ...props
}) => (
  <InputWrapper styledSize={size} {...props}>
    {before && (
      <InlineFlex absolute zIndex="3">
        {before}
      </InlineFlex>
    )}
    {after && (
      <InlineFlex absolute right="0" zIndex="3">
        {after}
      </InlineFlex>
    )}
    <InputMask
      alwaysShowMask={alwaysShowMask}
      mask={mask}
      maskChar={maskChar}
      disabled={disabled}
      defaultValue={defaultValue}
      readOnly={readOnly}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    >
      {(maskProps: any) => (
        <_Input
          after={after}
          aria-invalid={state === 'danger'}
          aria-label={a11yLabel}
          aria-required={isRequired}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          disabled={disabled}
          elementRef={inputRef}
          before={before}
          id={a11yId}
          max={max}
          maxLength={maxLength}
          min={min}
          minLength={minLength}
          multiple={multiple}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
          readOnly={readOnly}
          spellCheck={spellCheck}
          state={state}
          step={step}
          styledSize={size}
          type={type}
          {...maskProps}
        />
      )}
    </InputMask>
    {isLoading && <LoadingSpinner color="text" size="small" />}
  </InputWrapper>
);

Input.Icon = Icon;

export const inputPropTypes = {
  after: PropTypes.element,
  a11yId: PropTypes.string,
  a11yLabel: PropTypes.string,
  alwaysShowMask: PropTypes.bool,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  before: PropTypes.element,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  inputRef: PropTypes.object as PropTypes.Validator<LocalInputProps['inputRef']>,
  isLoading: PropTypes.bool,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  size: sizePropType,
  mask: PropTypes.string,
  maskChar: PropTypes.string,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  minLength: PropTypes.number,
  multiple: PropTypes.bool,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  spellCheck: PropTypes.bool,
  step: PropTypes.number,
  state: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};
Input.propTypes = inputPropTypes;

export const inputDefaultProps: Partial<LocalInputProps> = {
  a11yId: undefined,
  a11yLabel: undefined,
  alwaysShowMask: false,
  autoComplete: undefined,
  autoFocus: false,
  children: null,
  className: undefined,
  defaultValue: undefined,
  disabled: false,
  after: undefined,
  before: undefined,
  inputRef: undefined,
  isLoading: false,
  isRequired: false,
  mask: undefined,
  maskChar: undefined,
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
  value: undefined
};
Input.defaultProps = inputDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<InputProps> & InputComponents = Input;
export default C;
