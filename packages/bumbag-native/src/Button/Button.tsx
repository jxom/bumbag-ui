import * as React from 'react';
import { Platform, TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import ConditionalWrap from 'conditional-wrap';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { ButtonType, Omit, Size, Palette } from 'bumbag/types';
import _throttle from 'lodash/throttle';

import { Box, BoxProps } from '../Box';
import { IconProps } from '../Icon';
import { SpinnerProps } from '../Spinner/Spinner';

import * as styles from './Button.styles';
import { ButtonIcon } from './ButtonIcon';
import { ButtonText } from './ButtonText';

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
  /** Sets a throttle for the press event (`onPress`) to be only invoked at most once every `x` milliseconds.  */
  throttle?: boolean | number;
  type?: ButtonType;
};
export type ButtonProps = BoxProps & RNTouchableOpacityProps & LocalButtonProps;

export const ButtonContext = React.createContext<LocalButtonProps>({});

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
      onPress,
      palette,
      size,
      spinnerProps,
      throttle,
      variant,
    } = props;

    const boxProps = Box.useProps(props);

    const activeOpacity = Platform.OS === 'web' || isStatic ? '1' : props.activeOpacity;

    let spinnerColor = palette;
    if (props.variant === 'default') {
      spinnerColor = `${props.palette}Inverted`;
    }
    if (props.palette === 'default') {
      spinnerColor = 'defaultInverted';
    }

    const contextValue = React.useMemo(
      () => ({
        color,
        palette,
        size,
        variant,
      }),
      [color, palette, size, variant]
    );

    const isString =
      typeof children === 'string' ||
      (Array.isArray(children) && !children.some?.((child) => typeof child !== 'string'));

    return {
      ...boxProps,
      onPress: throttle
        ? _throttle(onPress, throttle === true ? 2000 : throttle, { leading: true, trailing: false })
        : onPress,
      children: (
        <ButtonContext.Provider value={contextValue}>
          <React.Fragment>
            {props.isLoading && <styles.ButtonSpinner color={spinnerColor} {...spinnerProps} />}
            <ConditionalWrap condition={isLoading} wrap={(children) => <Box opacity="0">{children}</Box>}>
              <React.Fragment>
                {iconBefore && (
                  <ButtonIcon
                    // @ts-ignore
                    isBefore
                    icon={iconBefore}
                    {...iconBeforeProps}
                  />
                )}
                {isString ? (
                  // @ts-ignore
                  <ButtonText>{children}</ButtonText>
                ) : (
                  children
                )}
                {iconAfter && (
                  <ButtonIcon
                    // @ts-ignore
                    isAfter
                    icon={iconAfter}
                    {...iconAfterProps}
                  />
                )}
              </React.Fragment>
            </ConditionalWrap>
          </React.Fragment>
        </ButtonContext.Provider>
      ),
      activeOpacity,
    };
  },
  {
    defaultProps: {
      _hover: true,
      _focus: true,
      _active: true,
      _hoveractive: true,
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
