import * as React from 'react';
// @ts-ignore
import _omit from 'lodash/omit';

import RadioGroup, {
  LocalRadioGroupProps,
  RadioGroupProps,
  radioGroupPropTypes,
  radioGroupDefaultProps
} from './RadioGroup';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperDefaultProps,
  fieldWrapperPropTypes
} from '../FieldWrapper/FieldWrapper';
import { Omit } from '../types';

export type LocalRadioGroupFieldProps = LocalRadioGroupProps & Omit<LocalFieldWrapperProps, 'children'>;
export type RadioGroupFieldProps = RadioGroupProps & LocalRadioGroupFieldProps;

export const RadioGroupField: React.FunctionComponent<LocalRadioGroupFieldProps> = ({
  a11yId,
  description,
  hint,
  isFullWidth,
  isOptional,
  isRequired,
  label,
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
    {({ elementProps }) => <RadioGroup {...props} {...elementProps} />}
  </FieldWrapper>
);

RadioGroupField.propTypes = {
  ..._omit(fieldWrapperPropTypes, 'children'),
  ...radioGroupPropTypes
};
RadioGroupField.defaultProps = {
  ...fieldWrapperDefaultProps,
  ...radioGroupDefaultProps
};

// @ts-ignore
const C: React.FunctionComponent<RadioGroupFieldProps> = RadioGroupField;
export default C;
