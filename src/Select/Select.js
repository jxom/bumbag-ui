// @flow
import React, { PureComponent, type Node } from 'react';

import type { Size } from '../types';
import { InlineBlock } from '../primitives';

import _Select, { LoadingSpinner } from './styled';
import Icon from './Icon';

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
  /** Disables the select field */
  disabled?: boolean,
  /** Makes the select field span full width */
  isFullWidth?: boolean,
  /** Adds a cute loading indicator to the select field */
  isLoading?: boolean,
  /** Makes the select field required and sets aria-invalid to true */
  isRequired?: boolean,
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
  /** Value of the select field */
  value?: string,
  /** Function to invoke when focus is lost */
  onBlur?: Function,
  /** Function to invoke when the select field has changed */
  onChange?: Function,
  /** Function to invoke when the select field is focused */
  onFocus?: Function
};
type State = {
  isPlaceholderSelected: boolean
};

class Select extends PureComponent<Props, State> {
  static defaultProps = {
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
    name: undefined,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    placeholder: undefined,
    size: 'default',
    state: undefined,
    value: undefined
  };

  state = {
    isPlaceholderSelected: Boolean(this.props.placeholder)
  };

  handleChange = (e: Object) => {
    const { onChange } = this.props;
    this.setState({ isPlaceholderSelected: false });
    onChange && onChange(e.target.value);
  };

  render = () => {
    const {
      a11yId,
      a11yLabel,
      autoComplete,
      className,
      autoFocus,
      defaultValue,
      disabled,
      isFullWidth,
      isLoading,
      isRequired,
      name,
      onBlur,
      onChange,
      onFocus,
      options,
      placeholder,
      size,
      state,
      value,
      ...props
    } = this.props;
    const { isPlaceholderSelected } = this.state;
    return (
      <InlineBlock relative width={isFullWidth ? '100%' : undefined} {...props}>
        <_Select
          aria-invalid={state === 'danger'}
          aria-label={a11yLabel}
          aria-required={isRequired}
          use="select"
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={defaultValue || placeholder}
          disabled={disabled}
          id={a11yId}
          isFullWidth={isFullWidth}
          isPlaceholderSelected={isPlaceholderSelected}
          name={name}
          onBlur={onBlur}
          onChange={this.handleChange}
          onFocus={onFocus}
          size={size}
          state={state}
          value={value}
        >
          {placeholder && <option disabled>{placeholder}</option>}
          {options.map((option, i) => (
            <option
              key={i} // eslint-disable-line
              disabled={disabled || option.disabled}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </_Select>
        {isLoading ? <LoadingSpinner color="text" /> : <Icon />}
      </InlineBlock>
    );
  };
}

export default Select;
