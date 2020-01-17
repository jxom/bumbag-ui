import * as styles from './styles';
import { Input as _Input, InputIcon, InputField } from './Input';

export * from './Input';
export const Input = Object.assign(_Input, {
  Icon: InputIcon,
  Field: InputField
});
export { styles as inputStyles };
