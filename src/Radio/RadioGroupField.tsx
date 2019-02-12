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

export type LocalRadioGroupFieldProps = Omit<LocalFieldWrapperProps, 'children'> & LocalRadioGroupProps;
export type RadioGroupFieldProps = RadioGroupProps & LocalRadioGroupFieldProps;

export const RadioGroupField: React.FunctionComponent<LocalRadioGroupFieldProps> = ({
  a11yId,
  a11yLabel,
  className,
  defaultValue,
  description,
  disabled,
  hint,
  isHorizontal,
  isOptional,
  isRequired,
  label,
  name,
  onChange,
  options,
  state,
  validationText,
  value,
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
      <RadioGroup
        a11yId={a11yId}
        a11yLabel={a11yLabel}
        className={className}
        defaultValue={defaultValue}
        disabled={disabled}
        isHorizontal={isHorizontal}
        name={name}
        options={options}
        state={state}
        value={value}
        onChange={onChange}
        {...elementProps}
      />
    )}
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
