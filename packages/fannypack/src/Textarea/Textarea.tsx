import * as React from 'react';
import * as PropTypes from 'prop-types';
import { InputProps as ReakitInputProps } from 'reakit/ts/Input/Input';

import _Textarea, { LoadingSpinner } from './styled';
import { Box } from '../primitives';
import { Omit } from '../types';

export type LocalTextareaProps = {
  /** An accessible identifier for the textarea */
  a11yId?: string;
  /** An accessible label for the textarea */
  a11yLabel?: string;
  autoComplete?: string;
  /** Automatically focus on the textarea */
  autoFocus?: boolean;
  className?: string;
  /** Default value of the textarea */
  defaultValue?: string;
  /** Disables the textrea */
  disabled?: boolean;
  /** Makes the textarea span full width */
  isFullWidth?: boolean;
  /** Adds a cute loading indicator to the textarea */
  isLoading?: boolean;
  /** Makes the texrea required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Name of the textarea */
  name?: string;
  /** Alters the size of the textarea. Can be "small", "medium" or "large" */
  size?: string;
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the maximum number of characters (in UTF-16 code units) that the user can enter. For other control types, it is ignored. */
  maxLength?: number;
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the minimum number of characters (in UTF-16 code points) that the user can enter. For other control types, it is ignored. */
  minLength?: number;
  /** Regex pattern to apply to the textarea */
  pattern?: string;
  /** Hint text to display */
  placeholder?: string;
  /** This prop prevents the user from modifying the value of the textarea. It is ignored if the value of the type attribute is hidden, range, color, checkbox, radio, file, or a button type (such as button or submit). */
  readOnly?: boolean;
  /** The minimum number of rows in the text area. */
  rows?: number;
  /** Setting the value of this attribute to true indicates that the element needs to have its spelling and grammar checked. The value default indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value. The value false indicates that the element should not be checked. */
  spellCheck?: boolean;
  /** State of the input. Can be any color in the palette. */
  state?: string;
  /** Value of the input */
  value?: string;
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  /** Function to invoke when input has changed */
  onChange?: React.FormEventHandler<HTMLTextAreaElement>;
  /** Function to invoke when input is focused */
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
};
export type TextareaProps = Omit<ReakitInputProps, 'size'> & LocalTextareaProps;

export const Textarea: React.FunctionComponent<LocalTextareaProps> = ({
  a11yId,
  a11yLabel,
  isLoading,
  isRequired,
  size,
  state,
  ...props
}) => (
  <Box relative>
    <_Textarea
      use="textarea"
      aria-invalid={state === 'danger'}
      aria-label={a11yLabel}
      aria-required={isRequired}
      id={a11yId}
      styledSize={size}
      state={state}
      {...props}
    />
    {isLoading && <LoadingSpinner color="text" />}
  </Box>
);

export const textareaPropTypes = {
  a11yId: PropTypes.string,
  a11yLabel: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  rows: PropTypes.number,
  spellCheck: PropTypes.bool,
  state: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};
Textarea.propTypes = textareaPropTypes;

export const textareaDefaultProps = {
  a11yId: undefined,
  a11yLabel: undefined,
  autoComplete: undefined,
  autoFocus: false,
  className: undefined,
  defaultValue: undefined,
  disabled: false,
  isFullWidth: false,
  isLoading: false,
  isRequired: false,
  maxLength: undefined,
  minLength: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  pattern: undefined,
  placeholder: undefined,
  readOnly: undefined,
  rows: 3,
  spellCheck: undefined,
  size: 'default',
  state: undefined,
  value: undefined
};
Textarea.defaultProps = textareaDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<TextareaProps> = Textarea;
export default Textarea;
