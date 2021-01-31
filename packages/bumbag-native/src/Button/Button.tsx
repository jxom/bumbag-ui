import * as React from 'react';
import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { ButtonType, Omit, Size, Palette } from 'bumbag/types';

import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';
import { Text, TextProps } from '../../Text/Text';
import * as styles from './Button.styles';

export type LocalButtonProps = {
  /** Icon that appears on the right side of the button. */
  iconAfter?: IconProps['icon'];
  iconAfterProps?: Omit<IconProps, 'icon'>;
  /** Icon that appears on the left side of the button. */
  iconBefore?: IconProps['icon'];
  iconBeforeProps?: Omit<IconProps, 'icon'>;
  /** Adds a loading indicator to the button. */
  isLoading?: boolean;
  /** Makes the button not interactable. */
  isStatic?: boolean;
  palette?: Palette;
  size?: Size;
  /** Custom props for the isLoading spinner. */
  // spinnerProps?: SpinnerProps;
  type?: ButtonType;
};
export type ButtonProps = BoxProps & RNTouchableOpacityProps & LocalButtonProps;

const useProps = createHook<ButtonProps>(
  (props) => {
    const { children, ...restProps } = props;
    const boxProps = Box.useProps(restProps);
    return { ...boxProps, children: typeof children === 'string' ? <Text>{children}</Text> : children };
  },
  { defaultProps: { palette: 'default' }, themeKey: 'native.Button' }
);

export const Button = createComponent<ButtonProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledButton,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Button',
    },
    themeKey: 'native.Button',
  }
);
