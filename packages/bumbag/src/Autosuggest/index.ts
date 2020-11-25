import { formikField, reduxFormField } from '../utils';
import * as styles from './Autosuggest.styles';
import { Autosuggest as _Autosuggest } from './Autosuggest';
import { AutosuggestField as _AutosuggestField } from './AutosuggestField';
import { AutosuggestStaticItem } from './AutosuggestStaticItem';
import { AutosuggestItem } from './AutosuggestItem';

export * from './Autosuggest';
export * from './AutosuggestField';
export const Autosuggest = Object.assign(_Autosuggest, {
  StaticItem: AutosuggestStaticItem,
  Item: AutosuggestItem,
  Formik: formikField(_Autosuggest, { isAutosuggest: true }),
  ReduxForm: reduxFormField(_Autosuggest, { isAutosuggest: true }),
});
export const AutosuggestField = Object.assign(_AutosuggestField, {
  Formik: formikField(_AutosuggestField, { hasFieldWrapper: true, isAutosuggest: true }),
  ReduxForm: reduxFormField(_AutosuggestField, { hasFieldWrapper: true, isAutosuggest: true }),
});
export { styles as autosuggestStyles };
