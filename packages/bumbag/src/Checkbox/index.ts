import { formikField, reduxFormField } from '../utils';
import * as styles from './Checkbox.styles';
import { Checkbox as _Checkbox, CheckboxField as _CheckboxField } from './Checkbox';
import { CheckboxGroup as _CheckboxGroup, CheckboxGroupField as _CheckboxGroupField } from './CheckboxGroup';

export * from './Checkbox';
export * from './CheckboxGroup';
export const Checkbox = Object.assign(_Checkbox, {
  Formik: formikField(_Checkbox, { isCheckbox: true }),
  ReduxForm: reduxFormField(_Checkbox, { isCheckbox: true }),
});
export const CheckboxField = Object.assign(_CheckboxField, {
  Formik: formikField(_CheckboxField, { isCheckbox: true, hasFieldWrapper: true }),
  ReduxForm: reduxFormField(_CheckboxField, { isCheckbox: true, hasFieldWrapper: true }),
});
export const CheckboxGroup = Object.assign(_CheckboxGroup, {
  Formik: formikField(_CheckboxGroup, { isCheckboxGroup: true }),
  ReduxForm: reduxFormField(_CheckboxGroup, { isCheckboxGroup: true }),
});
export const CheckboxGroupField = Object.assign(_CheckboxGroupField, {
  Formik: formikField(_CheckboxGroupField, { isCheckboxGroup: true, hasFieldWrapper: true }),
  ReduxForm: reduxFormField(_CheckboxGroupField, { isCheckboxGroup: true, hasFieldWrapper: true }),
});
export { styles as checkboxStyles };
