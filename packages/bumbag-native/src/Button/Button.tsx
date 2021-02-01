import * as React from 'react';
import { Platform, TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import ConditionalWrap from 'conditional-wrap';
import { createComponent, createElement, createHook, useTheme } from 'bumbag/utils';
import { ButtonType, Omit, Size, Palette } from 'bumbag/types';

import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';
import { Text, TextProps } from '../../Text/Text';
import { Spinner, SpinnerProps } from '../../Spinner/Spinner';
import { palette } from '../utils';
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
  spinnerProps?: SpinnerProps;
  type?: ButtonType;
};
export type ButtonProps = BoxProps & RNTouchableOpacityProps & LocalButtonProps;

const useProps = createHook<ButtonProps>(
  (props) => {
    const {
      children,
      color,
      iconAfter,
      iconAfterProps,
      iconBefore,
      iconBeforeProps,
      isLoading,
      isStatic,
      palette,
      size,
      spinnerProps,
      variant,
    } = props;

    const { theme } = useTheme();

    const boxProps = Box.useProps(props);

    const activeOpacity = Platform.OS === 'web' || isStatic ? '1' : props.activeOpacity;

    let spinnerColor = palette;
    if (props.variant === 'default') {
      spinnerColor = `${props.palette}Inverted`;
    }
    if (props.palette === 'default') {
      spinnerColor = 'defaultInverted';
    }

    return {
      ...boxProps,
      children: (
        <React.Fragment>
          {props.isLoading && <styles.ButtonSpinner color={spinnerColor} {...spinnerProps} />}
          <ConditionalWrap condition={isLoading} wrap={(children) => <Box opacity="0">{children}</Box>}>
            <React.Fragment>
              {iconBefore && (
                <styles.ButtonIcon
                  color={styles.getButtonIconColor({ ...props, theme })}
                  // @ts-ignore
                  isBefore
                  icon={iconBefore}
                  {...iconBeforeProps}
                />
              )}
              {typeof children === 'string' ? (
                // @ts-ignore
                <styles.ButtonText color={color} palette={palette} size={size} variant={variant}>
                  {children}
                </styles.ButtonText>
              ) : (
                children
              )}
              {iconAfter && (
                <styles.ButtonIcon
                  color={styles.getButtonIconColor({ ...props, theme })}
                  // @ts-ignore
                  isAfter
                  icon={iconAfter}
                  {...iconAfterProps}
                />
              )}
            </React.Fragment>
          </ConditionalWrap>
        </React.Fragment>
      ),
      activeOpacity,
    };
  },
  {
    defaultProps: {
      disabled: false,
      iconAfter: undefined,
      iconBefore: undefined,
      isLoading: false,
      isStatic: false,
      variant: 'default',
      palette: 'default',
      size: 'default',
      type: 'button',
    },
    themeKey: 'native.Button',
  }
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
