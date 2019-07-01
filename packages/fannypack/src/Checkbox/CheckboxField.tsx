import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _omit from 'lodash/omit';

import Checkbox, { LocalCheckboxProps, CheckboxProps, checkboxDefaultProps, checkboxPropTypes } from './Checkbox';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperDefaultProps,
  fieldWrapperPropTypes
} from '../FieldWrapper/FieldWrapper';
import { Omit } from '../types';
import { formikField, reduxFormField } from '../adaptors/fields';

export type LocalCheckboxFieldProps = Omit<LocalFieldWrapperProps, 'children'> &
  LocalCheckboxProps & {
    checkboxLabel?: string;
    checkboxProps?: LocalCheckboxProps;
  };
export type CheckboxFieldProps = LocalCheckboxFieldProps & CheckboxProps;

export const CheckboxField: React.FunctionComponent<LocalCheckboxFieldProps> & {
  Formik: React.FunctionComponent<CheckboxFieldProps>;
  ReduxForm: React.FunctionComponent<CheckboxFieldProps>;
} = ({
  a11yId,
  autoFocus,
  checkboxLabel,
  checkboxProps,
  checked,
  className,
  defaultChecked,
  description,
  disabled,
  hint,
  label,
  indeterminate,
  id,
  isOptional,
  isRequired,
  onBlur,
  onChange,
  onFocus,
  name,
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
      <Checkbox
        autoFocus={autoFocus}
        checked={checked}
        className={className}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        indeterminate={indeterminate}
        isRequired={isRequired}
        label={checkboxLabel}
        name={name}
        state={state}
        // @ts-ignore
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        {...elementProps}
        {...checkboxProps}
      />
    )}
  </FieldWrapper>
);

CheckboxField.Formik = formikField(CheckboxField, { hasFieldWrapper: true, isCheckbox: true });
CheckboxField.ReduxForm = reduxFormField(CheckboxField, { hasFieldWrapper: true, isCheckbox: true });

CheckboxField.propTypes = {
  checkboxLabel: PropTypes.string,
  checkboxProps: PropTypes.shape(checkboxPropTypes),
  ...checkboxPropTypes,
  ..._omit(fieldWrapperPropTypes, 'children')
};
CheckboxField.defaultProps = {
  checkboxProps: {},
  ...checkboxDefaultProps,
  ...fieldWrapperDefaultProps
};

// @ts-ignore
const C: React.FunctionComponent<CheckboxFieldProps> = CheckboxField;
export default C;
