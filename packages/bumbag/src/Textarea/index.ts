import { formikField, reduxFormField } from '../utils';
import * as styles from './Textarea.styles';
import { Textarea as _Textarea, TextareaField as _TextareaField } from './Textarea';

export * from './Textarea';
export const Textarea = Object.assign(_Textarea, {
  Formik: formikField(_Textarea),
  ReduxForm: reduxFormField(_Textarea),
});
export const TextareaField = Object.assign(_TextareaField, {
  Formik: formikField(_TextareaField, { hasFieldWrapper: true }),
  ReduxForm: reduxFormField(_TextareaField, { hasFieldWrapper: true }),
});
export { styles as textareaStyles };
