import { formikField, reduxFormField } from '../utils';
import * as styles from './Switch.styles';
import { Switch as _Switch, SwitchField as _SwitchField } from './Switch';
import { SwitchGroup as _SwitchGroup, SwitchGroupField as _SwitchGroupField } from './SwitchGroup';

export * from './Switch';
export * from './SwitchGroup';
export const Switch = Object.assign(_Switch, {
  Formik: formikField(_Switch, { isCheckbox: true }),
  ReduxForm: reduxFormField(_Switch, { isCheckbox: true }),
});
export const SwitchField = Object.assign(_SwitchField, {
  Formik: formikField(_SwitchField, { isCheckbox: true, hasFieldWrapper: true }),
  ReduxForm: reduxFormField(_SwitchField, { isCheckbox: true, hasFieldWrapper: true }),
});
export const SwitchGroup = Object.assign(_SwitchGroup, {
  Formik: formikField(_SwitchGroup, { isCheckboxGroup: true }),
  ReduxForm: reduxFormField(_SwitchGroup, { isCheckboxGroup: true }),
});
export const SwitchGroupField = Object.assign(_SwitchGroupField, {
  Formik: formikField(_SwitchGroupField, { isCheckboxGroup: true, hasFieldWrapper: true }),
  ReduxForm: reduxFormField(_SwitchGroupField, { isCheckboxGroup: true, hasFieldWrapper: true }),
});
export { styles as switchStyles };
