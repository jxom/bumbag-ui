import * as React from 'react';
// @ts-ignore
import * as PropTypes from 'prop-types';
// @ts-ignore
import _omit from 'lodash/omit';

import { Omit } from '../types';
import Textarea, { LocalTextareaProps, TextareaProps, textareaDefaultProps, textareaPropTypes } from './Textarea';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperDefaultProps,
  fieldWrapperPropTypes
} from '../FieldWrapper/FieldWrapper';

export type LocalTextareaFieldProps = Omit<LocalFieldWrapperProps, 'children'> &
  LocalTextareaProps & {
    textareaProps?: LocalTextareaProps;
  };
export type TextareaFieldProps = LocalTextareaFieldProps & TextareaProps;

export const TextareaField: React.FunctionComponent<LocalTextareaFieldProps> = ({
  a11yId,
  a11yLabel,
  autoComplete,
  autoFocus,
  defaultValue,
  description,
  disabled,
  hint,
  isFullWidth,
  isLoading,
  isOptional,
  isRequired,
  label,
  name,
  maxLength,
  minLength,
  pattern,
  placeholder,
  readOnly,
  rows,
  spellCheck,
  size,
  state,
  textareaProps,
  validationText,
  value,
  onBlur,
  onChange,
  onFocus,
  ...props
}) => (
  <FieldWrapper
    a11yId={a11yId}
    description={description}
    hint={hint}
    isOptional={isOptional}
    isRequired={isRequired}
    label={label}
    state={state}
    validationText={validationText}
    {...props}
  >
    {({ elementProps }) => (
      <Textarea
        a11yId={a11yId}
        a11yLabel={a11yLabel}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        isFullWidth={isFullWidth}
        isLoading={isLoading}
        isRequired={isRequired}
        name={name}
        size={size}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        spellCheck={spellCheck}
        state={state}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        {...elementProps}
        {...textareaProps}
      />
    )}
  </FieldWrapper>
);

export const textareaFieldPropTypes = {
  textareaProps: PropTypes.shape(textareaPropTypes),
  ..._omit(fieldWrapperPropTypes, 'children'),
  ...textareaPropTypes
};
TextareaField.propTypes = textareaFieldPropTypes;

export const textareaFieldDefaultProps = {
  textareaProps: {},
  ...fieldWrapperDefaultProps,
  ...textareaDefaultProps
};
TextareaField.defaultProps = textareaFieldDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<TextareaFieldProps> = TextareaField;
export default C;
