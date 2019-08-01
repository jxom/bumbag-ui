import * as React from 'react';
import { Button as ReakitButton } from 'reakit';

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
  const { className: prevClassName, ...newProps } = useBoxProps(props);
  const className = utils.useClassName({
    style: styles.Button,
    styleProps: props,
    prevClassName
  });
  return { ...newProps, className };
}

export function Button(props: ButtonProps) {
  const { children, ...restProps } = props;
  const buttonProps = useButtonProps(restProps);
  if (utils.isFunction(children)) {
    return <React.Fragment>{children(buttonProps)}</React.Fragment>;
  }
  return <ReakitButton {...buttonProps}>{children}</ReakitButton>;
}
