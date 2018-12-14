import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
// @ts-ignore
import _omit from 'lodash/omit';

import Checkbox, { LocalCheckboxProps, CheckboxProps, checkboxDefaultProps, checkboxPropTypes } from './Checkbox';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperDefaultProps,
  fieldWrapperPropTypes
} from '../FieldWrapper/FieldWrapper';
import { Omit } from '../types';

export interface Props {
  checkboxLabel?: string;
}
export type LocalCheckboxFieldProps = Omit<LocalFieldWrapperProps, 'children'> & LocalCheckboxProps & Props;
export type CheckboxFieldProps = LocalCheckboxFieldProps & CheckboxProps;

export const CheckboxField: React.FunctionComponent<LocalCheckboxFieldProps> = ({
  a11yId,
  checkboxLabel,
  description,
  hint,
  label,
  indeterminate,
  isFullWidth,
  isOptional,
  isRequired,
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
    {({ elementProps }) => <Checkbox label={checkboxLabel} {...props} {...elementProps} />}
  </FieldWrapper>
);

CheckboxField.propTypes = {
  checkboxLabel: PropTypes.string,
  ...checkboxPropTypes,
  ..._omit(fieldWrapperPropTypes, 'children')
};
CheckboxField.defaultProps = {
  ...checkboxDefaultProps,
  ...fieldWrapperDefaultProps
};

// @ts-ignore
const C: React.FunctionComponent<CheckboxFieldProps> = CheckboxField;
export default C;
