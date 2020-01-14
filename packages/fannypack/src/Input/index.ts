import * as styles from './styles';
import { Input as _Input, InputIcon } from './Input';

export * from './Input';
export const Input = Object.assign(_Input, {
  Icon: InputIcon
});
export { styles as inputStyles };
