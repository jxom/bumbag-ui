import * as React from 'react';
// @ts-ignore
import _omit from 'lodash/omit';

import { Omit } from '../types';
import Textarea, { LocalTextareaProps, TextareaProps, textareaDefaultProps, textareaPropTypes } from './Textarea';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperDefaultProps,
  fieldWrapperPropTypes
} from '../FieldWrapper/FieldWrapper';

export type LocalTextareaFieldProps = Omit<LocalFieldWrapperProps, 'children'> & LocalTextareaProps;
export type TextareaFieldProps = LocalTextareaFieldProps & TextareaProps;

export const TextareaField: React.FunctionComponent<LocalTextareaFieldProps> = ({
  a11yId,
  a11yLabel,
  description,
  hint,
  isLoading,
  isOptional,
  isRequired,
  label,
  size,
  state,
  validationText,
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
  >
    {({ elementProps }) => <Textarea {...props} {...elementProps} />}
  </FieldWrapper>
);

TextareaField.propTypes = {
  ..._omit(fieldWrapperPropTypes, 'children'),
  ...textareaPropTypes
};

TextareaField.defaultProps = {
  ...fieldWrapperDefaultProps,
  ...textareaDefaultProps
};

// @ts-ignore
const C: React.FunctionComponent<TextareaFieldProps> = TextareaField;
export default C;
