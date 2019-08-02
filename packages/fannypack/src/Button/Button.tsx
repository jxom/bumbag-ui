import * as React from 'react';
import { Button as ReakitButton, useButton as useReakitButton } from 'reakit';

import * as utils from '../utils';
import { BoxProps, useBoxProps } from '../Box';

import * as styles from './styles';
import { ButtonThemeConfig } from '../types';

export type LocalButtonProps = {
  overrides?: ButtonThemeConfig;
  palette: string;
  size: 'small' | 'default' | 'medium' | 'large';
};
export type ButtonProps = BoxProps & LocalButtonProps;

Button.defaultProps = {
  palette: 'default',
  size: 'default'
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
  if (utils.isFunction(children)) {
    return <React.Fragment>{children(buttonProps)}</React.Fragment>;
  }
  return (
    <ReakitButton as={use} {...buttonProps}>
      {children}
    </ReakitButton>
  );
}
