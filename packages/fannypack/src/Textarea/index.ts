import * as styles from './styles';
import { Textarea as _Textarea, TextareaField } from './Textarea';

export * from './Textarea';
export const Textarea = Object.assign(_Textarea, {
  Field: TextareaField
});
export { styles as textareaStyles };
