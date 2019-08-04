import * as React from 'react';
import { Button as ReakitButton, useButton as useReakitButton } from 'reakit';

import * as utils from '../utils';
import { ButtonThemeConfig, ButtonKind, ButtonType, Size, Palette } from '../types';
import { BoxProps, useBoxProps } from '../Box';

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
  /** Theming overrides. [Click here](TODO) to view the theming schema for `Button`. */
  overrides?: ButtonThemeConfig;
  palette?: Palette;
  size?: Size;
  type?: ButtonType;
};
export type ButtonProps = BoxProps & LocalButtonProps;

Button.defaultProps = {
  disabled: false,
  iconAfter: undefined,
  iconBefore: undefined,
  isLoading: false,
  isStatic: false,
  kind: undefined,
  palette: 'default',
  size: 'default',
  type: 'button'
};

export function useButtonProps(props: Partial<ButtonProps> = {}) {
  const boxProps = useBoxProps(props);
  const buttonProps = useReakitButton(props);

  const className = utils.useClassName({
    style: styles.Button,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, ...buttonProps, className };
}

export function Button(props: ButtonProps) {
  const { use, children, ...restProps } = props;
  const buttonProps = useButtonProps(restProps);
  return (
    <utils.Element component={ReakitButton} use={use} htmlProps={buttonProps}>
      {children}
    </utils.Element>
  );
}
