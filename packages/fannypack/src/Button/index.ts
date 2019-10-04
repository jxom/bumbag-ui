import * as styles from './styles';
import { Button as _Button } from './Button';
import { ButtonClose } from './ButtonClose';

export * from './Button';
export const Button = Object.assign(_Button, {
  Close: ButtonClose
});
export { styles as buttonStyles };
