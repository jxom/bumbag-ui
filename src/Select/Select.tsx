import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { InlineBlockProps as ReakitInlineBlockProps } from 'reakit/ts/InlineBlock/InlineBlock';

import { InlineBlock } from '../primitives';
import { Omit } from '../types';

import _Select, { LoadingSpinner } from './styled';
import Icon from './Icon';

export interface LocalSelectProps {
  /** ID for the select field */
  a11yId?: string;
  /** An accessible label for the select field */
  a11yLabel?: string;
  autoComplete?: string;
  /** Automatically focus the select field */
  autoFocus?: boolean;
  className?: string;
  /** Default value of the select field */
  defaultValue?: string;
  /** Disables the select field */
  disabled?: boolean;
  /** Makes the select field span full width */
  isFullWidth?: boolean;
  /** Adds a cute loading indicator to the select field */
  isLoading?: boolean;
  /** Makes the select field required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Name of the select field */
  name?: string;
  /** Select field options */
  options: Array<{ label: string; value: string; disabled?: boolean }>;
  /** Hint text to display */
  placeholder?: string;
  /** Alters the size of the select field. Can be "small", "medium" or "large" */
  size?: string;
  /** State of the select field. Can be any color in the palette. */
  state?: string;
  /** Value of the select field */
  value?: string;
  /** Function to invoke when focus is lost */
  onBlur?(e: React.FocusEvent<HTMLSelectElement>): void;
  /** Function to invoke when the select field has changed */
  onChange?(value: string): void;
  /** Function to invoke when the select field is focused */
  onFocus?(e: React.FocusEvent<HTMLSelectElement>): void;
}
export type SelectProps = Omit<ReakitInlineBlockProps, 'children'> & LocalSelectProps;

export interface SelectState {
  isPlaceholderSelected: boolean;
}

export const selectDefaultProps = {
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
export const selectPropTypes = {
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
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};

export class Select extends React.PureComponent<LocalSelectProps, SelectState> {
  static defaultProps = selectDefaultProps;
  static propTypes = selectPropTypes;

  state = {
    isPlaceholderSelected: Boolean(this.props.placeholder)
  };

  handleChange = (e: any) => {
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

// @ts-ignore
const C: React.PureComponent<SelectProps, SelectState> = Select;
export default Select;
