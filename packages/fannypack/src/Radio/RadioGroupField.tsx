import * as React from 'react';
// @ts-ignore
import * as PropTypes from 'prop-types';
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
import { formikField, reduxFormField } from '../adaptors/fields';

export type LocalRadioGroupFieldProps = Omit<LocalFieldWrapperProps, 'children'> &
  LocalRadioGroupProps & {
    radioGroupProps?: Omit<Omit<LocalRadioGroupProps, 'options'>, 'name'>;
  };
export type RadioGroupFieldProps = RadioGroupProps & LocalRadioGroupFieldProps;

export const RadioGroupField: React.FunctionComponent<LocalRadioGroupFieldProps> & {
  Formik: React.FunctionComponent<RadioGroupFieldProps>;
  ReduxForm: React.FunctionComponent<RadioGroupFieldProps>;
} = ({
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
  radioGroupProps,
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
        {...radioGroupProps}
      />
    )}
  </FieldWrapper>
);

RadioGroupField.Formik = formikField(RadioGroupField, { hasFieldWrapper: true });
RadioGroupField.ReduxForm = reduxFormField(RadioGroupField, { hasFieldWrapper: true });

export const radioGroupFieldPropTypes = {
  radioGroupProps: PropTypes.shape(_omit(radioGroupPropTypes, 'options', 'name')),
  ..._omit(fieldWrapperPropTypes, 'children'),
  ...radioGroupPropTypes
};
RadioGroupField.propTypes = radioGroupFieldPropTypes;

export const radioGroupFieldDefaultProps = {
  radioGroupProps: {},
  ...fieldWrapperDefaultProps,
  ...radioGroupDefaultProps
};
RadioGroupField.defaultProps = radioGroupFieldDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<RadioGroupFieldProps> = RadioGroupField;
export default C;
