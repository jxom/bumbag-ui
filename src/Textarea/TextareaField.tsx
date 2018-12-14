import * as React from 'react';

import { Omit } from '../types';
import Textarea, { LocalTextareaProps, TextareaProps, textareaDefaultProps, textareaPropTypes } from './Textarea';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperDefaultProps,
  fieldWrapperPropTypes
} from '../FieldWrapper/FieldWrapper';

export interface Props {}
export type LocalTextareaFieldProps = Omit<LocalFieldWrapperProps, 'children'> & LocalTextareaProps & Props;
export type InputFieldProps = LocalTextareaFieldProps & TextareaProps;

export const TextareaField: React.FunctionComponent<LocalTextareaFieldProps> = ({
  a11yId,
  a11yLabel,
  description,
  hint,
  isFullWidth,
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
    isFullWidth={isFullWidth}
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
  ...fieldWrapperPropTypes,
  ...textareaPropTypes
};

TextareaField.defaultProps = {
  ...fieldWrapperDefaultProps,
  ...textareaDefaultProps
};

export default TextareaField;
