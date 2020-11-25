import { formikField, reduxFormField } from '../utils';
import * as styles from './SelectMenu.styles';
import { SelectMenu as _SelectMenu } from './SelectMenu';
import { SelectMenuField as _SelectMenuField } from './SelectMenuField';
import { SelectMenuStaticItem } from './SelectMenuStaticItem';
import { SelectMenuItem } from './SelectMenuItem';

export * from './SelectMenu';
export * from './SelectMenuField';
export const SelectMenu = Object.assign(_SelectMenu, {
  StaticItem: SelectMenuStaticItem,
  Item: SelectMenuItem,
  Formik: formikField(_SelectMenu, { isSelectMenu: true }),
  ReduxForm: reduxFormField(_SelectMenu, { isSelectMenu: true }),
});
export const SelectMenuField = Object.assign(_SelectMenuField, {
  Formik: formikField(_SelectMenuField, { hasFieldWrapper: true, isSelectMenu: true }),
  ReduxForm: reduxFormField(_SelectMenuField, { hasFieldWrapper: true, isSelectMenu: true }),
});
export { styles as SelectMenuStyles };
