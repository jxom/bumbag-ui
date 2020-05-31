import { formikField, reduxFormField } from '../utils';
import * as styles from './styles';
import { Checkbox as _Checkbox, CheckboxField as _CheckboxField } from './Checkbox';
import { CheckboxGroup as _CheckboxGroup, CheckboxGroupField as _CheckboxGroupField } from './CheckboxGroup';

export * from './Checkbox';
export * from './CheckboxGroup';
export const Checkbox = Object.assign(_Checkbox, {
  Formik: formikField(_Checkbox),
  ReduxForm: reduxFormField(_Checkbox),
});
export const CheckboxField = Object.assign(_Checkbox, {
  Formik: formikField(_CheckboxField, { hasFieldWrapper: true }),
  ReduxForm: reduxFormField(_CheckboxField, { hasFieldWrapper: true }),
});
export const CheckboxGroup = Object.assign(_CheckboxGroup, {
  Formik: formikField(_CheckboxGroup),
  ReduxForm: reduxFormField(_CheckboxGroup),
});
export const CheckboxGroupField = Object.assign(_CheckboxGroup, {
  Formik: formikField(_CheckboxGroupField, { hasFieldWrapper: true }),
  ReduxForm: reduxFormField(_CheckboxGroupField, { hasFieldWrapper: true }),
});
export { styles as checkboxStyles };
