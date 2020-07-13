import { formikField, reduxFormField } from '../utils';
import * as styles from './styles';
import { Autosuggest as _Autosuggest } from './Autosuggest';
import { AutosuggestField as _AutosuggestField } from './AutosuggestField';
import { AutosuggestStaticItem } from './AutosuggestStaticItem';
import { AutosuggestItem } from './AutosuggestItem';

export * from './Autosuggest';
export * from './AutosuggestField';
export const Autosuggest = Object.assign(_Autosuggest, {
  StaticItem: AutosuggestStaticItem,
  Item: AutosuggestItem,
  Formik: formikField(_Autosuggest, { isSelectMenu: true }),
  ReduxForm: reduxFormField(_Autosuggest, { isSelectMenu: true }),
});
export const AutosuggestField = Object.assign(_AutosuggestField, {
  Formik: formikField(_AutosuggestField, { hasFieldWrapper: true, isSelectMenu: true }),
  ReduxForm: reduxFormField(_AutosuggestField, { hasFieldWrapper: true, isSelectMenu: true }),
});
export { styles as autosuggestStyles };
