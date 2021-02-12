import * as React from 'react';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { ButtonContext, ButtonProps } from '../Button';
import { TextProps } from '../Text';
import * as styles from './Button.styles';

export type LocalButtonTextProps = {
  color?: ButtonProps['color'];
  palette?: ButtonProps['palette'];
  size?: ButtonProps['size'];
  variant?: ButtonProps['variant'];
};
export type ButtonTextProps = BoxProps & TextProps & LocalButtonTextProps;

const useProps = createHook<ButtonTextProps>(
  (props) => {
    const buttonProps = React.useContext(ButtonContext);
    const boxProps = Box.useProps(props);
    return { ...buttonProps, ...boxProps };
  },
  { themeKey: 'native.ButtonText' }
);

export const ButtonText = createComponent<ButtonTextProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledButtonText,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.ButtonText',
    },
    themeKey: 'native.ButtonText',
  }
);
