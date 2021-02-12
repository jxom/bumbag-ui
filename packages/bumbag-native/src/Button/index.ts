import * as buttonStyles from './Button.styles';
import { Button as _Button } from './Button';
import { ButtonIcon } from './ButtonIcon';
import { ButtonText } from './ButtonText';

export * from './Button';
export * from './ButtonIcon';
export * from './ButtonText';
export const Button = Object.assign(_Button, { Icon: ButtonIcon, Text: ButtonText });
export { buttonStyles };
