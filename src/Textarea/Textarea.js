import React, { type Node } from 'react';

import type { Size } from '../types';
import _Textarea, { LoadingSpinner } from './styled';
import { InlineBlock } from '../primitives';

export type Props = {
  /** An accessible identifier for the textarea */
  a11yId?: string,
  /** An accessible label for the textarea */
  a11yLabel?: string,
  use?: any,
  autoComplete?: string,
  /** Automatically focus on the textarea */
  autoFocus?: boolean,
  children: Node,
  className?: string,
  /** Default value of the textarea */
  defaultValue?: string,
  /** Disables the textrea */
  disabled?: boolean,
  /** Makes the textarea span full width */
  isFullWidth?: boolean,
  /** Adds a cute loading indicator to the textarea */
  isLoading?: boolean,
  /** Makes the texrea required and sets aria-invalid to true */
  isRequired?: boolean,
  /** Name of the textarea */
  name?: string,
  /** Alters the size of the textarea. Can be "small", "medium" or "large" */
  size?: Size,
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the maximum number of characters (in UTF-16 code units) that the user can enter. For other control types, it is ignored. */
  maxLength?: number,
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the minimum number of characters (in UTF-16 code points) that the user can enter. For other control types, it is ignored. */
  minLength?: number,
  /** Regex pattern to apply to the textarea */
  pattern?: string,
  /** Hint text to display */
  placeholder?: string,
  /** This prop prevents the user from modifying the value of the textarea. It is ignored if the value of the type attribute is hidden, range, color, checkbox, radio, file, or a button type (such as button or submit). */
  readOnly?: boolean,
  /** The minimum number of rows in the text area. */
  rows?: number,
  /** Setting the value of this attribute to true indicates that the element needs to have its spelling and grammar checked. The value default indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value. The value false indicates that the element should not be checked. */
  spellCheck?: boolean,
  /** State of the input. Can be any color in the palette. */
  state?: string,
  /** Value of the input */
  value?: string,
  /** Function to invoke when focus is lost */
  onBlur?: Function,
  /** Function to invoke when input has changed */
  onChange?: Function,
  /** Function to invoke when input is focused */
  onFocus?: Function
};

const Textarea = ({ a11yId, a11yLabel, isFullWidth, isLoading, isRequired, size, state, ...props }: Props) => (
  <InlineBlock relative width={isFullWidth ? '100%' : undefined}>
    <_Textarea
      aria-invalid={state === 'danger'}
      aria-label={a11yLabel}
      aria-required={isRequired}
      id={a11yId}
      isFullWidth={isFullWidth}
      size={size}
      state={state}
      {...props}
    />
    {isLoading && <LoadingSpinner color="text" />}
  </InlineBlock>
);

Textarea.defaultProps = {
  a11yId: undefined,
  a11yLabel: undefined,
  use: undefined,
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
  rows: '3',
  spellCheck: undefined,
  size: 'default',
  state: undefined,
  value: undefined
};

export default Textarea;
