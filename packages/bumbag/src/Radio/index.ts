import { formikField, reduxFormField } from '../utils';
import { Radio as _Radio } from './Radio';
import { RadioGroup as _RadioGroup, RadioGroupField as _RadioGroupField } from './RadioGroup';
import * as styles from './Radio.styles';

export * from './Radio';
export * from './RadioGroup';
export const Radio = Object.assign(_Radio, {
  Formik: formikField(_Radio),
  ReduxForm: reduxFormField(_Radio),
});
export const RadioGroup = Object.assign(_RadioGroup, {
  Formik: formikField(_RadioGroup),
  ReduxForm: reduxFormField(_RadioGroup),
});
export const RadioGroupField = Object.assign(_RadioGroupField, {
  Formik: formikField(_RadioGroupField, { hasFieldWrapper: true }),
  ReduxForm: reduxFormField(_RadioGroupField, { hasFieldWrapper: true }),
});
export { styles as radioStyles };
