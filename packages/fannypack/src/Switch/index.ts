import { formikField, reduxFormField } from '../utils';
import * as styles from './styles';
import { Switch as _Switch, SwitchField as _SwitchField } from './Switch';
import { SwitchGroup as _SwitchGroup, SwitchGroupField as _SwitchGroupField } from './SwitchGroup';

export * from './Switch';
export * from './SwitchGroup';
export const Switch = Object.assign(_Switch, {
  Formik: formikField(_Switch),
  ReduxForm: reduxFormField(_Switch),
});
export const SwitchField = Object.assign(_SwitchField, {
  Formik: formikField(_SwitchField, { hasFieldWrapper: true }),
  ReduxForm: reduxFormField(_SwitchField, { hasFieldWrapper: true }),
});
export const SwitchGroup = Object.assign(_SwitchGroup, {
  Formik: formikField(_SwitchGroup),
  ReduxForm: reduxFormField(_SwitchGroup),
});
export const SwitchGroupField = Object.assign(_SwitchGroupField, {
  Formik: formikField(_SwitchGroupField, { hasFieldWrapper: true }),
  ReduxForm: reduxFormField(_SwitchGroupField, { hasFieldWrapper: true }),
});
export { styles as switchStyles };
