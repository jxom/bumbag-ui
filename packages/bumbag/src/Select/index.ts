import { formikField, reduxFormField } from '../utils';
import * as styles from './Select.styles';
import { Select as _Select, SelectField as _SelectField } from './Select';

export * from './Select';
export const Select = Object.assign(_Select, {
  Formik: formikField(_Select),
  ReduxForm: reduxFormField(_Select),
});
export const SelectField = Object.assign(_SelectField, {
  Formik: formikField(_SelectField, { hasFieldWrapper: true }),
  ReduxForm: reduxFormField(_SelectField, { hasFieldWrapper: true }),
});
export { styles as selectStyles };
