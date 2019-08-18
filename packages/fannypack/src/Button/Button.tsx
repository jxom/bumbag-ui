import { Button as ReakitButton, useButton as useReakitButton } from 'reakit';

import { useClassName, createComponent, createElement } from '../utils';
import { ButtonThemeConfig, ButtonKind, ButtonType, Size, Palette } from '../types';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalButtonProps = {
  /** Makes the button disabled. The user is unable to interact with the button. */
  disabled?: boolean;
  /** TODO: Icon that appears on the right side of the button. */
  iconAfter?: any;
  /** TODO: Icon that appears on the left side of the button. */
  iconBefore?: any;
  /** TODO: Adds a loading indicator to the button. */
  isLoading?: boolean;
  /** Makes the button not interactable. */
  isStatic?: boolean;
  kind?: ButtonKind;
  palette?: Palette;
  size?: Size;
  type?: ButtonType;
  /** Theming overrides. [Click here](TODO) to view the theming schema for `Button`. */
  overrides?: ButtonThemeConfig;
};
export type ButtonProps = BoxProps & LocalButtonProps;

function useProps(props: Partial<ButtonProps> = {}, refs: Array<any> = []) {
  const buttonProps = useReakitButton(props);
  const boxProps = Box.useProps(props, [buttonProps.ref, ...refs]);

  const className = useClassName({
    style: styles.Button,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...buttonProps, ...boxProps, className };
}

export const Button = createComponent<ButtonProps>(
  (props: ButtonProps) => {
    const { children, use, ...restProps } = props;
    const buttonProps = useProps(restProps);
    return createElement({ children, component: ReakitButton, use, htmlProps: buttonProps });
  },
  {
    defaultProps: {
      disabled: false,
      iconAfter: undefined,
      iconBefore: undefined,
      isLoading: false,
      isStatic: false,
      kind: undefined,
      palette: 'default',
      size: 'default',
      type: 'button'
    },
    useProps
  }
);
