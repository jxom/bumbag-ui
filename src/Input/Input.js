// @flow
import React, { type Node } from 'react';

import type { Size } from '../types';
import _Input from './styled';

type Props = {
  /** An accessible label for the input */
  a11yLabel?: string,
  as?: any,
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
  /** Regex pattern to apply to the input */
  pattern?: string,
  /** Hint text to display */
  placeholder?: string,
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

const Input = ({ a11yLabel, className, isFullWidth, isLoading, isRequired, size, state, ...props }: Props) => (
  <_Input
    aria-invalid={state === 'danger'}
    aria-label={a11yLabel}
    aria-required={isRequired}
    isFullWidth={isFullWidth}
    isLoading={isLoading}
    size={size}
    state={state}
    {...props}
  />
);

Input.defaultProps = {
  a11yLabel: null,
  as: null,
  autoFocus: false,
  className: null,
  defaultValue: undefined,
  disabled: false,
  id: null,
  isFullWidth: false,
  isLoading: false,
  isRequired: false,
  name: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  pattern: null,
  placeholder: null,
  size: 'default',
  state: null,
  type: 'text',
  value: undefined
};

export default Input;

/**
 * TODO:
 *
 * a11y properties:
 * - for/id labels
 */
