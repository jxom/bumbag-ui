import * as React from 'react';
import { createComponent, createElement, createHook, useTheme } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { ButtonContext, ButtonProps } from '../Button';
import { IconProps } from '../Icon';
import * as styles from './Button.styles';

export type LocalButtonIconProps = {
  color?: ButtonProps['color'];
  palette?: ButtonProps['palette'];
  size?: ButtonProps['size'];
  variant?: ButtonProps['variant'];
};
export type ButtonIconProps = BoxProps & IconProps & LocalButtonIconProps;

const useProps = createHook<ButtonIconProps>(
  (props) => {
    const { theme } = useTheme();
    const buttonProps = React.useContext(ButtonContext);
    const boxProps = Box.useProps(props);
    return {
      ...buttonProps,
      color: props.color || styles.getButtonIconColor({ ...buttonProps, theme }),
      size: '200',
      ...boxProps,
    };
  },
  { themeKey: 'native.ButtonIcon' }
);

export const ButtonIcon = createComponent<ButtonIconProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledButtonIcon,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.ButtonIcon',
    },
    themeKey: 'native.ButtonIcon',
  }
);
